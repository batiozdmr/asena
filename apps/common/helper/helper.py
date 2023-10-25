def to_upper_tr(val):
    if isinstance(val, str):
        val = val.replace('ı', 'I')
        val = val.replace('i', 'İ')
        val = val.replace('ş', 'Ş')
        val = val.replace('ğ', 'Ğ')
        val = val.replace('ö', 'Ö')
        val = val.replace('ü', 'Ü')
        val = val.replace('ç', 'Ç')
        return val.upper()
    else:
        return val


def convert_to_int_list(lst):
    if lst and len(lst) > 0:
        try:
            result = ','.join(lst)
            return list(map(int, result.split(',')))
        except Exception:
            pass
    return []
