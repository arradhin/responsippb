# Deskripsi
Proyek ini merupakan program sederhana layanan daftar cuci sepatu menggunakan Javascript yang mengimplementasikan REST API dengan framework Node.js dan Express.js. API pada proyek ini melakukan proses CRUD (Create, Read, Update, Delete). 

# Tujuan
1. Mengimplementasikan API yang melakukan proses CRUD (Create, Read, Update, Delete).
2. Mengimplementasikan framework pada Javascript
3. Mengetahui bagaimana suatu program untuk kebutuhan bisnis dibuat

# Fitur utama
| Method        | Endpoint               | Deskripsi    |
| ------------- | -------------          | ------------ |
| POST          | /items                 | Menambah data sepatu |
| GET           | /items                 | Mengambil seluruh data |
| GET           | /items?status=Selesai  | Mengambil data berdasarkan status |
| GET           | /items/:id             | Mengambil data berdasarkan ID |
| PUT           | /items/:id             | Mengubah data sepatu |
| DELETE        | /items/:id             | Menghapus data sepatu |

# Struktur data
```
{
  "nama": "Converse Chuck Taylor",
  "pelanggan": "Andi",
  "status": "Proses"
}
```
Keterangan:
nama: Nama sepatu yang ingin dibeli
pelanggan: Nama pelanggan
status: Menunjukka keadaan barang apakah sudah terproses atau belum

# Contoh request dan respons
