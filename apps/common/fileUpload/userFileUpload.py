from django.template.defaultfilters import slugify

def handleUploadedFile(f):
    newName=slugify(f.name)
    with open('media/fileUpload/' + newName, 'wb+') as destination:
        for chunk in f.chunks():
            destination.write(chunk)
