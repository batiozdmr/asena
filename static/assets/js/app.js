!(function (TynApp) {
    "use strict";

    /* ==============================================
       THEME
    =============================================== */
    TynApp.Theme = function () {
        var KEY = 'asena-theme';

        function apply(dark) {
            document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
            localStorage.setItem(KEY, dark ? 'dark' : 'light');
            // sync all theme toggles
            document.querySelectorAll('#themeToggle, #themeToggle2').forEach(function (el) {
                el.checked = dark;
            });
        }

        var saved = localStorage.getItem(KEY);
        apply(saved === 'dark');

        document.querySelectorAll('#themeToggle, #themeToggle2').forEach(function (el) {
            el.addEventListener('change', function () { apply(el.checked); });
        });
    };

    /* ==============================================
       TOAST
    =============================================== */
    TynApp.Toast = function (msg, type) {
        var container = document.getElementById('toastContainer');
        if (!container) return;
        var t = document.createElement('div');
        t.className = 'asena-toast';
        var accent = type === 'error' ? '#ef4444' : type === 'success' ? '#10b981' : '#6366f1';
        t.style.borderLeft = '3px solid ' + accent;
        t.textContent = msg;
        container.appendChild(t);
        setTimeout(function () {
            t.style.opacity = '0';
            t.style.transition = 'opacity 0.3s';
            setTimeout(function () { t.remove(); }, 320);
        }, 3200);
    };

    /* ==============================================
       USER DROPDOWN MENU
    =============================================== */
    TynApp.UserMenu = function () {
        var btn      = document.getElementById('userMenuBtn');
        var dropdown = document.getElementById('userDropdown');
        var logoutBtn  = document.getElementById('logoutBtn');
        var logoutForm = document.getElementById('logoutForm');

        if (!btn || !dropdown) return;

        function close() { dropdown.classList.remove('open'); }
        function open()  { dropdown.classList.add('open'); }
        function toggle() { dropdown.classList.contains('open') ? close() : open(); }

        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            toggle();
        });

        document.addEventListener('click', function (e) {
            if (!btn.contains(e.target) && !dropdown.contains(e.target)) close();
        });

        if (logoutBtn && logoutForm) {
            logoutBtn.addEventListener('click', function () {
                if (window.confirm('Çıkış yapmak istediğinize emin misiniz?')) {
                    logoutForm.submit();
                }
            });
        }
    };

    /* ==============================================
       MOBILE SIDEBAR
    =============================================== */
    TynApp.MobileSidebar = function () {
        var toggle  = document.getElementById('sidebarToggle');
        var sidebar = document.getElementById('appSidebar');
        var overlay = document.getElementById('sidebarOverlay');
        if (!sidebar) return;

        function openSidebar()  { sidebar.classList.add('open'); if (overlay) overlay.classList.add('show'); }
        function closeSidebar() { sidebar.classList.remove('open'); if (overlay) overlay.classList.remove('show'); }

        if (toggle)  toggle.addEventListener('click', openSidebar);
        if (overlay) overlay.addEventListener('click', closeSidebar);

        // close on session click (mobile)
        sidebar.addEventListener('click', function (e) {
            if (window.innerWidth <= 768 && e.target.closest('.js-session-item')) {
                closeSidebar();
            }
        });
    };

    /* ==============================================
       CHAT
    =============================================== */
    TynApp.Chat = {
        botsend: function () {
            var sendBtn      = document.getElementById('tynBotSend');
            var inputEl      = document.getElementById('tynBotInput');
            var messagesEl   = document.getElementById('chatMessages');
            var welcomeEl    = document.getElementById('welcome_content');
            var sessionInput = document.getElementById('currentSessionId');
            var profileImg   = document.getElementById('profileImage');
            var sessionList  = document.getElementById('sessionList');
            var newSessionBtn = document.getElementById('newSessionBtn');
            var csrfInput    = document.querySelector('input[name="csrfmiddlewaretoken"]');

            if (!sendBtn || !inputEl || !messagesEl) return;

            var isBusy = false;
            var csrf   = csrfInput ? csrfInput.value : '';

            /* ---- helpers ---- */
            function getSession()  { return sessionInput ? sessionInput.value : ''; }
            function setSession(v) { if (sessionInput) sessionInput.value = v || ''; }

            function userAvatar() {
                var src = profileImg && profileImg.src ? profileImg.src : '';
                return '<img src="' + src + '" alt="">';
            }

            var BOT_SVG = '<svg viewBox="0 0 43 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="15">'
                + '<path d="M37.27 14.79C37.27 14.79 45.08 20.37 41.95 29.53 41.95 29.53 41.38 31.2 39.04 34.43L42.47 37.97C42.47 37.97 43.31 39.48 41.59 40H24.92C24.92 40 19.61 40.16 14.82 36.98 14.82 36.98 12.16 35.21 9.77 31.98L18.62 32.03C18.62 32.03 24.3 31.98 29.77 28.33 35.23 24.69 37.42 18.7 37.27 14.79Z" fill="#60A5FA"/>'
                + '<path d="M34.51 12.81C32.27 1.04 19.35.05 19.35.05 8.31-.67 3.31 6.1 3.31 6.1-4.24 15.26 3.68 23.7 3.68 23.7 3.68 23.7 3 24.64.86 26.51-1.27 28.39 1.23 29.37 1.23 29.37H17.34C23.45 28.75 25.91 27.4 25.91 27.4 36.33 22.03 34.51 12.81 34.51 12.81Z" fill="#2563EB"/>'
                + '</svg>';

            function scrollBottom() {
                if (messagesEl) messagesEl.scrollTop = messagesEl.scrollHeight + 9999;
            }

            function showChat() {
                if (welcomeEl) welcomeEl.style.display = 'none';
                messagesEl.classList.add('visible');
                messagesEl.style.display = 'flex';
            }

            function showWelcome() {
                if (welcomeEl) welcomeEl.style.display = 'flex';
                messagesEl.classList.remove('visible');
                messagesEl.style.display = 'none';
            }

            function formatText(raw) {
                var s = raw
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;');

                // code blocks
                s = s.replace(/```([\s\S]*?)```/g, function (_, code) {
                    return '<pre><code>' + code.trim() + '</code></pre>';
                });
                // inline code
                s = s.replace(/`([^`\n]+)`/g, '<code>$1</code>');
                // bold
                s = s.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                // italic
                s = s.replace(/\*(.*?)\*/g, '<em>$1</em>');
                // ordered list
                s = s.replace(/(?:^|\n)(\d+\.\s.+)/g, function (_, item) {
                    return '\n<li>' + item.replace(/^\d+\.\s/, '') + '</li>';
                });
                // bullet list
                s = s.replace(/(?:^|\n)[*\-]\s(.+)/g, '\n<li>$1</li>');
                // wrap consecutive <li> in <ul>
                s = s.replace(/(<li>[\s\S]*?<\/li>)(?!\s*<li>)/g, '<ul>$1</ul>');
                // line breaks (skip inside pre)
                s = s.replace(/<\/pre>\n?/g, '</pre>');
                s = s.replace(/([^>])\n/g, '$1<br>');

                return s;
            }

            function now() {
                var d = new Date();
                return d.getHours().toString().padStart(2,'0') + ':' + d.getMinutes().toString().padStart(2,'0');
            }

            function appendMessage(role, text, avatarHtml) {
                var row = document.createElement('div');
                row.className = 'msg-row ' + role;

                var avatarDiv = document.createElement('div');
                if (role === 'user') {
                    avatarDiv.className = 'msg-avatar';
                } else {
                    avatarDiv.className = 'bot-avatar';
                }
                avatarDiv.innerHTML = avatarHtml;

                var body = document.createElement('div');
                body.className = 'msg-body';

                var bubble = document.createElement('div');
                bubble.className = 'msg-bubble';

                var timeEl = document.createElement('div');
                timeEl.className = 'msg-time';
                timeEl.textContent = now();

                body.appendChild(bubble);
                body.appendChild(timeEl);

                if (role === 'user') {
                    bubble.innerHTML = text.replace(/\n/g, '<br>');
                    row.appendChild(body);
                    row.appendChild(avatarDiv);
                } else {
                    bubble.innerHTML = '';
                    row.appendChild(avatarDiv);
                    row.appendChild(body);
                }

                messagesEl.appendChild(row);
                scrollBottom();
                return role === 'assistant' ? bubble : null;
            }

            function showTyping() {
                var row = document.createElement('div');
                row.className = 'typing-row';
                row.id = 'typingRow';
                row.innerHTML = '<div class="bot-avatar">' + BOT_SVG + '</div>'
                    + '<div class="typing-bubble">'
                    + '<div class="typing-dot"></div>'
                    + '<div class="typing-dot"></div>'
                    + '<div class="typing-dot"></div>'
                    + '</div>';
                messagesEl.appendChild(row);
                scrollBottom();
            }

            function hideTyping() {
                var el = document.getElementById('typingRow');
                if (el) el.remove();
            }

            function typeBotMessage(bubbleEl, text, onDone) {
                var i = 0;
                var CHUNK = 4;
                function tick() {
                    if (i < text.length) {
                        bubbleEl.textContent = text.substring(0, i + CHUNK);
                        i += CHUNK;
                        scrollBottom();
                        setTimeout(tick, 12);
                    } else {
                        bubbleEl.innerHTML = formatText(text);
                        scrollBottom();
                        if (onDone) onDone();
                    }
                }
                tick();
            }

            /* ---- session sidebar ---- */
            function setActiveSession(id) {
                if (!sessionList) return;
                sessionList.querySelectorAll('.js-session-item').forEach(function (el) {
                    el.classList.toggle('active', el.dataset.sessionId === String(id));
                });
            }

            function addToSidebar(id, title) {
                if (!sessionList) return;

                // remove empty state
                var empty = sessionList.querySelector('.sessions-empty, #sessionsEmpty');
                if (empty) empty.remove();

                // ensure group label
                if (!sessionList.querySelector('.session-group-lbl')) {
                    var lbl = document.createElement('p');
                    lbl.className = 'session-group-lbl';
                    lbl.textContent = 'Son Konuşmalar';
                    sessionList.insertBefore(lbl, sessionList.firstChild);
                }

                // skip if already there
                if (sessionList.querySelector('.js-session-item[data-session-id="' + id + '"]')) return;

                var item = document.createElement('div');
                item.className = 'session-item js-session-item active';
                item.dataset.sessionId = String(id);
                item.innerHTML = '<div class="session-icon">'
                    + '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" viewBox="0 0 16 16">'
                    + '<path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2z"/>'
                    + '</svg></div>'
                    + '<span class="session-title">' + (title || 'Yeni konuşma') + '</span>'
                    + '<button class="session-del js-session-delete" data-session-id="' + id + '" title="Sil" type="button">'
                    + '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" viewBox="0 0 16 16">'
                    + '<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>'
                    + '<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>'
                    + '</svg></button>';

                // insert after the group label
                var lbl = sessionList.querySelector('.session-group-lbl');
                if (lbl && lbl.nextSibling) {
                    sessionList.insertBefore(item, lbl.nextSibling);
                } else {
                    sessionList.appendChild(item);
                }

                bindItem(item);
                bindDelete(item.querySelector('.js-session-delete'));
            }

            function loadSession(id) {
                setSession(id);
                setActiveSession(id);
                // clear only message nodes (keep csrf + sessionInput)
                Array.from(messagesEl.childNodes).forEach(function (node) {
                    if (node.nodeType === 1 && node.tagName !== 'INPUT') {
                        node.remove();
                    }
                });
                showChat();

                fetch('/api/sessions/' + id + '/messages/', {
                    credentials: 'same-origin'
                })
                .then(function (r) { return r.json(); })
                .then(function (data) {
                    (data.messages || []).forEach(function (msg) {
                        var node = appendMessage(
                            msg.role,
                            msg.content,
                            msg.role === 'user' ? userAvatar() : BOT_SVG
                        );
                        if (node) node.innerHTML = formatText(msg.content);
                    });
                    scrollBottom();
                })
                .catch(function (err) {
                    console.error('[Asena] session load:', err);
                    TynApp.Toast('Konuşma yüklenemedi', 'error');
                });
            }

            function bindItem(item) {
                item.addEventListener('click', function (e) {
                    if (e.target.closest('.js-session-delete')) return;
                    loadSession(item.dataset.sessionId);
                });
            }

            function bindDelete(btn) {
                if (!btn) return;
                btn.addEventListener('click', function (e) {
                    e.stopPropagation();
                    var id = btn.dataset.sessionId;
                    if (!id) return;
                    if (!window.confirm('Bu konuşmayı silmek istediğinize emin misiniz?')) return;

                    fetch('/api/sessions/' + id + '/delete/', {
                        method: 'POST',
                        credentials: 'same-origin',
                        headers: { 'X-CSRFToken': csrf }
                    })
                    .then(function (r) { return r.json(); })
                    .then(function () {
                        var item = sessionList.querySelector('.js-session-item[data-session-id="' + id + '"]');
                        if (item) item.remove();

                        var remaining = sessionList.querySelectorAll('.js-session-item');
                        if (remaining.length === 0) {
                            var lbl = sessionList.querySelector('.session-group-lbl');
                            if (lbl) lbl.remove();
                            var empty = document.createElement('div');
                            empty.className = 'sessions-empty';
                            empty.id = 'sessionsEmpty';
                            empty.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16" style="display:block;margin:0 auto 0.5rem;opacity:0.3"><path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2z"/></svg>Henüz konuşma yok.';
                            sessionList.appendChild(empty);
                        }

                        if (getSession() === String(id)) {
                            setSession('');
                            Array.from(messagesEl.childNodes).forEach(function (node) {
                                if (node.nodeType === 1 && node.tagName !== 'INPUT') node.remove();
                            });
                            showWelcome();
                        }
                        TynApp.Toast('Konuşma silindi', 'success');
                    })
                    .catch(function (err) {
                        console.error('[Asena] delete:', err);
                        TynApp.Toast('Silme başarısız', 'error');
                    });
                });
            }

            // bind existing items
            if (sessionList) {
                sessionList.querySelectorAll('.js-session-item').forEach(bindItem);
                sessionList.querySelectorAll('.js-session-delete').forEach(bindDelete);
            }

            /* ---- new session ---- */
            if (newSessionBtn) {
                newSessionBtn.addEventListener('click', function () {
                    setSession('');
                    Array.from(messagesEl.childNodes).forEach(function (node) {
                        if (node.nodeType === 1 && node.tagName !== 'INPUT') node.remove();
                    });
                    showWelcome();
                    if (sessionList) sessionList.querySelectorAll('.js-session-item').forEach(function (el) {
                        el.classList.remove('active');
                    });
                    if (inputEl) inputEl.focus();
                });
            }

            /* ---- send ---- */
            function sendMessage() {
                if (isBusy) return;
                var text = inputEl.innerText.trim();
                if (!text) return;

                isBusy = true;
                sendBtn.disabled = true;
                inputEl.innerHTML = '';
                showChat();

                appendMessage('user', text, userAvatar());
                showTyping();

                var body = new URLSearchParams();
                body.append('question', text);
                body.append('session_id', getSession());

                fetch('/api/asena/', {
                    method: 'POST',
                    credentials: 'same-origin',
                    headers: {
                        'X-CSRFToken': csrf,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: body.toString()
                })
                .then(function (r) {
                    return r.json().then(function (data) {
                        return { ok: r.ok, status: r.status, data: data };
                    });
                })
                .then(function (res) {
                    hideTyping();
                    sendBtn.disabled = false;

                    if (!res.ok) {
                        var errMsg = 'Şu anda cevap veremiyorum, lütfen tekrar deneyin.';
                        if (res.data && res.data.error) errMsg = res.data.error;
                        if (res.status === 401) errMsg = 'Oturumunuz sona ermiş. Lütfen tekrar giriş yapın.';
                        var errNode = appendMessage('assistant', '', BOT_SVG);
                        typeBotMessage(errNode, errMsg, function () { isBusy = false; });
                        return;
                    }

                    if (res.data.session_id) {
                        var wasNew = !getSession();
                        setSession(res.data.session_id);
                        if (wasNew) {
                            var title = (res.data.title || text).substring(0, 45);
                            addToSidebar(res.data.session_id, title);
                            setActiveSession(res.data.session_id);
                        }
                    }

                    var botNode = appendMessage('assistant', '', BOT_SVG);
                    typeBotMessage(botNode, res.data.content || '', function () { isBusy = false; });
                })
                .catch(function (err) {
                    hideTyping();
                    sendBtn.disabled = false;
                    console.error('[Asena] fetch error:', err);
                    var errNode = appendMessage('assistant', '', BOT_SVG);
                    typeBotMessage(errNode, 'Bağlantı hatası. İnternet bağlantınızı kontrol edin.', function () { isBusy = false; });
                });
            }

            sendBtn.addEventListener('click', function (e) {
                e.preventDefault();
                sendMessage();
            });

            inputEl.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                }
            });

            // Focus input on load
            setTimeout(function () { inputEl.focus(); }, 100);
        }
    };

    /* ==============================================
       INIT
    =============================================== */
    TynApp.Custom = TynApp.Custom || {};

    TynApp.Custom.init = function () {
        TynApp.Theme();
        TynApp.UserMenu();
        TynApp.MobileSidebar();
        TynApp.Chat.botsend();
    };

    // Plugins stub (keep for bundle.js compatibility)
    TynApp.Plugins = TynApp.Plugins || {};
    TynApp.Plugins.init = function () {};

    TynApp.init = function () {
        if (typeof TynApp.Load === 'function') {
            TynApp.Load(TynApp.Custom.init);
        } else {
            document.addEventListener('DOMContentLoaded', TynApp.Custom.init);
        }
    };

    TynApp.init();

    return TynApp;
})(window.TynApp || (window.TynApp = {}));
