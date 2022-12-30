# PT-Digiafa-Kreasi-Nusantara

## Soal Fullstack Developer Internship

Ketentuan:

+ Buatlah fungsi menggunakan bahasa pemrograman Javascript / Typescript untuk
menyelesaikan soal-soal di bawah ini.
+ Buatlah sebuah repository (private) di github untuk menyimpan hasil pekerjaanmu.
+ Invite digiafakreasinusantara@gmail.com (username: digiafa) ke repository
tersebut.

__Case A__

```Serti memiliki beberapa sertifikat yang telah dikumpulkan selama bertahun-tahun.```

```
type ICertificate = {
    id: number;
    name: string;
    type: "kejuaraan" | "kehadiran";
    publisherId: string;
    publisherName: string;
    point: number;
    createdAt: Date;
}
const certificates: ICertificate[] = [
    {
        id: 1,
        name: "Finalis Lomba Coding",
        type: "kejuaraan",
        publisherId: "P001",
        publisherName: "EO Hack & Coding",
        point: 10,
        createdAt: '2014-10-05T14:48:00.000Z',
    },
    {
        id: 2,
        name: "Finalis Lomba Makan Kerupuk",
        type: "kejuaraan",
        publisherId: "P002",
        publisherName: "Panitia 17an Desa Juara",
        point: 20,
        createdAt: '2010-10-05T14:48:00.000Z',
    },
    {
        id: 3,
        name: "Juara 1 Lomba Panjat Pinang",
        type: "kejuaraan",
        publisherId: "P002",
        publisherName: "Panitia 17an Desa Jawara",
        point: 30,
        createdAt: '2022-10-05T14:48:00.000Z',
    },
    {
        id: 4,
        name: "Digital Marketing Sesi 1",
        type: "kehadiran",
        publisherId: "P003",
        publisherName: "EO Pelatihan",
        point: 5,
        createdAt: '2014-10-05T14:48:00.000Z',
    }
]
```

1. Urutkan data di atas berdasarkan tanggal pembuatan sertifikat (createdAt).
2. Kelompokkan data di atas berdasarkan tahun dikeluarkannya sertifikat tersebut.
3. Hitunglah, berapa total point yang didapatkan Serti di masing-masing publisher?
4. Apa yang salah dari data di atas? Bagaimana cara memperbaikinya?

__Case B__

Buatlah sebuah aplikasi web yang bisa digunakan untuk membuat desain.
Ketentuan:
1. Menggunakan React JS
2. Menggunakan package/library react-dnd (https://react-dnd.github.io/react-dnd/) atau
sejenisnya
3. Bisa menambahkan text & gambar.
4. Bisa drag n drop.