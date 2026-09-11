import os
import qrcode

output_path = os.path.join(os.path.dirname(__file__), 'qr_secret.png')
img = qrcode.make('SEITOKAI')
img.save(output_path)
print(output_path)
print(os.path.getsize(output_path))
