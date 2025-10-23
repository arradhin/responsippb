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
## POST /items

### Request

#### Endpoint & Header
```
POST /items
Content-Type: application/json
```

Body
```
{
  "nama": "Nike Air Force",
  "pelanggan": "George Orwell",
  "status": "Proses"
}
```

### Response
```
{
  "id": 1,
  "nama": "Nike Air Force",
  "pelanggan": "George Orwell",
  "status": "Proses"
}

```

## GET /items
### Request
```
GET /items
```

### Response
```
[
  {
    "id": 1,
    "nama": "Nike Air Force",
    "pelanggan": "George Orwell",
    "status": "Proses"
  },
  {
    "id": 2,
    "nama": "Yeezy",
    "pelanggan": "Mark Carney",
    "status": "Selesai"
  }
]

```

## GET /items?status=Selesai
### Request
```
GET /items?status=Selesai
```

### Response
```
[
  {
    "id": 2,
    "nama": "Yeezy",
    "pelanggan": "Mark Carney",
    "status": "Selesai"
  }
]

```

## GET /items/:id
### Request
```
GET /items/1
```

### Response
```
{
  "id": 1,
  "nama": "Nike Air Force",
  "pelanggan": "George Orwell",
  "status": "Proses"
}
```

## PUT /items/:id
### Request
```
PUT /items/1
```
##### Header & Body
```
Content-Type: application/json

{
  "nama": "Nike Air Force 1",
  "pelanggan": "Budi Santoso",
  "status": "Selesai"
}
```

### Response
```
{
  "id": 1,
  "nama": "Nike Air Force",
  "pelanggan": "George Orwell",
  "status": "Selesai"
}
```

## DELETE /items/:id
### Request
```
DELETE /items/1

```

### Response
```
{
  "message": "Item dihapus"
}

```

# Langkah Instalasi
Buka terminal dan jalankan perintah ini
```
npm init -y
npm install express cors body-parser
```

