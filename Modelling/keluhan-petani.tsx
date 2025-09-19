import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const KeluhanPetani = () => {
  const data = [
    {
      masalah: "Kegagalan Tanam",
      jumlah: 35,
      deskripsi: "Gagal tanam karena berbagai faktor seperti cuaca dan teknik"
    },
    {
      masalah: "Kurang Pengetahuan",
      jumlah: 32,
      deskripsi: "Tidak mengetahui cara bercocok tanam yang baik dan benar"
    },
    {
      masalah: "Minimnya Sosialisasi",
      jumlah: 16,
      deskripsi: "Kurangnya program sosialisasi dari penyuluh pertanian"
    },
    {
      masalah: "Irigasi Bermasalah",
      jumlah: 20,
      deskripsi: "Kerusakan sistem irigasi yang menghambat pengairan"
    },
    {
      masalah: "Harga Pupuk Tinggi",
      jumlah: 28,
      deskripsi: "Mahalnya harga pupuk menyulitkan petani"
    },
    {
      masalah: "Kualitas Benih Rendah",
      jumlah: 16,
      deskripsi: "Benih yang tersedia memiliki kualitas buruk"
    },
    {
      masalah: "Serangan Hama",
      jumlah: 20,
      deskripsi: "Gangguan hama yang merusak tanaman"
    },
    {
      masalah: "Kekurangan Alat",
      jumlah: 16,
      deskripsi: "Keterbatasan alat pertanian modern"
    },
    {
      masalah: "Minim Pendampingan",
      jumlah: 16,
      deskripsi: "Kurangnya pendampingan dari tenaga ahli"
    },
    {
      masalah: "Masalah Pasokan Air",
      jumlah: 17,
      deskripsi: "Pasokan air tidak lancar untuk pengairan"
    },
    {
      masalah: "Kegagalan Panen",
      jumlah: 24,
      deskripsi: "Gagal panen akibat berbagai faktor"
    }
  ];

  return (
    <Card className="w-full max-w-4xl p-4">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-center mb-4">
          Keluhan Utama Petani di Desa
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ left: 150 }}>
              <XAxis type="number" />
              <YAxis dataKey="masalah" type="category" width={150} />
              <Tooltip 
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white p-4 border rounded shadow">
                        <p className="font-bold">{payload[0].payload.masalah}</p>
                        <p className="text-sm">{payload[0].payload.deskripsi}</p>
                        <p className="text-sm font-bold mt-2">
                          Jumlah Keluhan: {payload[0].value}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar 
                dataKey="jumlah" 
                fill="#3B82F6"
                className="hover:opacity-80"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default KeluhanPetani;
