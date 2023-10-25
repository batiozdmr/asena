import logging
from django.conf import settings
from django.core.mail import send_mail, EmailMultiAlternatives
from django.contrib.auth.models import User

from ...parameter.models import MailHistory, MailTemplate


def sendMailTemplate(request,receiverUser, senderUser, contentTemplate, taskTitle=None, taskAssigns=None, taskDueDate=None,
                     taskUrl=None, messageTitle=None, messageAssigns=None, messageUrl=None
                     ):
    receiverUserGet = User.objects.get(username=receiverUser)
    senderUserGet = User.objects.get(username=senderUser)
    contentMailGet = MailTemplate.objects.filter(id=contentTemplate).translate(request.LANGUAGE_CODE).first()
    changeContent = contentMailGet.mailContent

    # GOREV
    if taskTitle:
        changeContent = changeContent.replace("#GOREV_BASLIK", taskTitle)
    if taskAssigns:
        changeContent = changeContent.replace("#GOREV_ATAYAN", taskAssigns)
    if taskDueDate:
        changeContent = changeContent.replace("#GOREV_TERMIN", taskDueDate)
    if taskUrl:
        changeContent = changeContent.replace("#GOREV_LINK", taskUrl)

    # MESAJ
    if messageTitle:
        changeContent = changeContent.replace("#MESAJ_BASLIK", messageTitle)
    if messageAssigns:
        changeContent = changeContent.replace("#MESAJ_GONDEREN", str(messageAssigns.first_name + " " + messageAssigns.last_name))
    if messageUrl:
        changeContent = changeContent.replace("#MESAJ_LINK", messageUrl)

    if receiverUserGet.email and senderUserGet and contentMailGet:
        try:
            msg = EmailMultiAlternatives(contentMailGet.mailTitle, changeContent, settings.DEFAULT_FROM_EMAIL,
                                         [receiverUserGet.email])
            msg.attach_alternative(changeContent, "text/html")
            msg.send()
        except Exception as ex:
            logging.error(ex)
    else:
        MailHistory.objects.create(receiver=receiverUserGet, mailTemplate=contentMailGet, sender=senderUserGet)



def sendMailAddressTemplate(receiverUser, senderUser, contentTemplate, taskTitle=None, taskAssigns=None, taskDueDate=None,
                     taskUrl=None, messageTitle=None, messageAssigns=None, messageUrl=None
                     ):
    receiverUserGet = receiverUser
    senderUserGet = User.objects.get(username=senderUser)
    contentMailGet = MailTemplate.objects.get(id=contentTemplate)
    changeContent = contentMailGet.mailContent

    # GOREV
    if taskTitle:
        changeContent = changeContent.replace("#GOREV_BASLIK", taskTitle)
    if taskAssigns:
        changeContent = changeContent.replace("#GOREV_ATAYAN", taskAssigns)
    if taskDueDate:
        changeContent = changeContent.replace("#GOREV_TERMIN", taskDueDate)
    if taskUrl:
        changeContent = changeContent.replace("#GOREV_LINK", taskUrl)

    # MESAJ
    if messageTitle:
        changeContent = changeContent.replace("#MESAJ_BASLIK", messageTitle)
    if messageAssigns:
        changeContent = changeContent.replace("#MESAJ_GONDEREN", str(messageAssigns.first_name + " " + messageAssigns.last_name))
    if messageUrl:
        changeContent = changeContent.replace("#MESAJ_LINK", messageUrl)

    if receiverUserGet and senderUserGet and contentMailGet:
        try:
            msg = EmailMultiAlternatives(contentMailGet.mailTitle, changeContent, settings.DEFAULT_FROM_EMAIL,
                                         [receiverUserGet])
            msg.attach_alternative(changeContent, "text/html")
            msg.send()
        except Exception as ex:
            logging.error(ex)
    else:
        MailHistory.objects.create(receiver=receiverUserGet, mailTemplate=contentMailGet, sender=senderUserGet)
