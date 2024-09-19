import qrcode 
from PIL import Image
import qrcode.constants

qr = qrcode.QRCode(version = 1,
                   error_correction = qrcode.constants.ERROR_CORRECT_H,
                   box_size = 10,
                   border = 4,)
qr.add_data("https://www.w3schools.com/")
qr.make(fit = True)
img = qr.make_image(fill_color = "white",back_color = "black")
img.save("School_Code.png")