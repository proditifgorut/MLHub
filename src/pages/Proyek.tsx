import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, BarChart, ScatterChart, PieChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Scatter, Pie, Cell } from 'recharts';
import { faker } from '@faker-js/faker';
import { FlaskConical, ClipboardList, Code2 } from 'lucide-react';

const generateLineData = (length = 12) => Array.from({ length }, (_, i) => ({
  name: `Hari ${i + 1}`,
  price: faker.number.float({ min: 100, max: 200, fractionDigits: 2 }),
  predicted: faker.number.float({ min: 100, max: 200, fractionDigits: 2 }),
}));

const generateScatterData = (length = 50) => Array.from({ length }, () => ({
  x: faker.number.float({ min: 10, max: 100 }),
  y: faker.number.float({ min: 10, max: 100 }),
  z: faker.helpers.arrayElement([1, 2, 3]),
}));

const generateBarData = () => [
  { name: 'Positif', value: faker.number.int({ min: 500, max: 1000 }) },
  { name: 'Netral', value: faker.number.int({ min: 200, max: 500 }) },
  { name: 'Negatif', value: faker.number.int({ min: 100, max: 300 }) },
];

const generatePieData = () => [
  { name: 'Bukan Penipuan', value: faker.number.int({ min: 950, max: 1000 }) },
  { name: 'Penipuan', value: faker.number.int({ min: 10, max: 50 }) },
];

const projects = [
  {
    category: 'Penambangan Data',
    field: 'Sains Data',
    title: 'Prediksi Harga Saham',
    description: 'Menggunakan analisis deret waktu untuk meramalkan harga saham atau mata uang kripto di masa depan berdasarkan data historis.',
    algorithm: 'Regresi / LSTM',
    formula: 'y = mx + b (Regresi Linier)',
    dataset: 'Yahoo Finance, Binance API',
    chart: <ResponsiveContainer width="100%" height={200}>
      <LineChart data={generateLineData()}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="price" stroke="#8884d8" name="Aktual" />
        <Line type="monotone" dataKey="predicted" stroke="#82ca9d" name="Prediksi" />
      </LineChart>
    </ResponsiveContainer>
  },
  {
    category: 'Penambangan Data',
    field: 'Sains Data',
    title: 'Segmentasi Pelanggan',
    description: 'Mengelompokkan pelanggan ke dalam segmen-segmen berbeda berdasarkan perilaku pembelian atau demografi untuk pemasaran yang ditargetkan.',
    algorithm: 'K-Means Clustering',
    formula: 'minimize Σ ||x - μi||²',
    dataset: 'Data transaksi e-commerce',
    chart: <ResponsiveContainer width="100%" height={200}>
      <ScatterChart>
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="Skor Belanja" />
        <YAxis type="number" dataKey="y" name="Pendapatan Tahunan" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend/>
        <Scatter name="Cluster 1" data={generateScatterData(20)} fill="#8884d8" />
        <Scatter name="Cluster 2" data={generateScatterData(20)} fill="#82ca9d" />
        <Scatter name="Cluster 3" data={generateScatterData(20)} fill="#ffc658" />
      </ScatterChart>
    </ResponsiveContainer>
  },
  {
    category: 'Penambangan Data',
    field: 'Analisis Data',
    title: 'Analisis Sentimen',
    description: 'Menganalisis ulasan produk untuk menentukan apakah sentimennya positif, negatif, atau netral menggunakan Natural Language Processing (NLP).',
    algorithm: 'NLP / Naive Bayes',
    formula: 'P(A|B) = [P(B|A) * P(A)] / P(B)',
    dataset: 'Ulasan Amazon/Shopee',
    chart: <ResponsiveContainer width="100%" height={200}>
      <BarChart data={generateBarData()}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" name="Jumlah Ulasan" />
      </BarChart>
    </ResponsiveContainer>
  },
  {
    category: 'Penambangan Data',
    field: 'Sains Data',
    title: 'Deteksi Penipuan',
    description: 'Mengidentifikasi pola mencurigakan dalam transaksi keuangan untuk mendeteksi dan mencegah aktivitas penipuan.',
    algorithm: 'Pohon Keputusan / Random Forest',
    formula: 'Gini Impurity / Information Gain',
    dataset: 'Transaksi Kartu Kredit',
    chart: <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie data={generatePieData()} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
          <Cell fill="#82ca9d" />
          <Cell fill="#EF4444" />
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  },
  {
    category: 'Penambangan Data',
    field: 'Sains Data',
    title: 'Prediksi Churn Pelanggan',
    description: 'Memprediksi pelanggan mana yang kemungkinan besar akan berhenti menggunakan layanan, memungkinkan upaya retensi proaktif.',
    algorithm: 'Klasifikasi (Regresi Logistik)',
    formula: 'P(y=1) = 1 / (1 + e^-z)',
    dataset: 'Data Layanan Berlangganan',
    chart: <ResponsiveContainer width="100%" height={200}>
      <BarChart data={[{name: 'Akan Churn', value: 150}, {name: 'Tidak Akan Churn', value: 850}]} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" width={120} />
        <Tooltip />
        <Bar dataKey="value" fill="#ffc658" name="Jumlah Pelanggan" />
      </BarChart>
    </ResponsiveContainer>
  },
  {
    category: 'Situs Web/Mobile',
    field: 'Rekayasa ML',
    title: 'Sistem Rekomendasi Produk',
    description: 'Menyarankan produk kepada pengguna berdasarkan perilaku masa lalu mereka atau perilaku pengguna serupa.',
    algorithm: 'Collaborative Filtering',
    formula: 'Similarity(A, B) = cos(θ)',
    dataset: 'Peringkat pengguna, riwayat pembelian',
    chart: <div className="text-center p-4">
      <h4 className="font-semibold mb-2">Contoh Rekomendasi</h4>
      <div className="flex justify-around items-center">
        <div className="text-center">
          <p>Pengguna A suka:</p>
          <p className="font-bold">📱, 💻</p>
        </div>
        <p className="text-2xl">+</p>
        <div className="text-center">
          <p>Pengguna B suka:</p>
          <p className="font-bold">📱, 💻, ⌚</p>
        </div>
        <p className="text-2xl">→</p>
        <div className="text-center">
          <p>Rekomendasi untuk A:</p>
          <p className="font-bold text-blue-600 text-2xl">⌚</p>
        </div>
      </div>
    </div>
  },
  {
    category: 'Situs Web/Mobile',
    field: 'Rekayasa ML',
    title: 'Chatbot Cerdas dengan NLP',
    description: 'Layanan pelanggan otomatis menggunakan model bahasa canggih seperti BERT atau GPT untuk memahami dan menanggapi pertanyaan pengguna.',
    algorithm: 'Transformers (BERT/GPT)',
    formula: 'Attention(Q, K, V)',
    dataset: 'Log percakapan, FAQ',
    chart: <div className="text-sm p-4 bg-gray-50 rounded-lg">
      <p><span className="font-bold text-blue-600">Pengguna:</span> Bagaimana cara mereset kata sandi saya?</p>
      <p className="mt-2"><span className="font-bold text-green-600">Bot:</span> Anda dapat mereset kata sandi dengan membuka "Pengaturan" {'>'} "Keamanan" dan mengklik "Reset Kata Sandi".</p>
    </div>
  },
  {
    category: 'Situs Web/Mobile',
    field: 'Rekayasa ML',
    title: 'Pengenalan Gambar',
    description: 'Secara otomatis mengidentifikasi dan memberi label objek dalam gambar yang diunggah pengguna, seperti spesies tanaman atau item makanan.',
    algorithm: 'Convolutional Neural Network (CNN)',
    formula: 'Convolution + Pooling Layers',
    dataset: 'ImageNet, Set Gambar Kustom',
    chart: <div className="text-center p-4">
      <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200&h=120&fit=crop" alt="cat" className="mx-auto rounded-lg mb-2" />
      <p>Prediksi: <span className="font-bold text-blue-600">Kucing (keyakinan 94%)</span></p>
    </div>
  },
  {
    category: 'Situs Web/Mobile',
    field: 'Rekayasa ML',
    title: 'Feed Berita yang Dipersonalisasi',
    description: 'Mengkurasi feed artikel dan berita berdasarkan riwayat baca dan minat pengguna.',
    algorithm: 'Content-Based Filtering',
    formula: 'Kemiripan profil item',
    dataset: 'Data interaksi pengguna (klik, suka)',
    chart: <div className="text-sm p-4 bg-gray-50 rounded-lg space-y-2">
      <p className="font-semibold">Artikel yang Direkomendasikan untuk Anda:</p>
      <p className="text-blue-600 hover:underline cursor-pointer">1. Masa Depan AI pada 2025</p>
      <p className="text-blue-600 hover:underline cursor-pointer">2. Memulai dengan React 19</p>
    </div>
  },
  {
    category: 'Situs Web/Mobile',
    field: 'Sains Data',
    title: 'Aplikasi Pemantauan Kesehatan',
    description: 'Memprediksi risiko kesehatan seperti diabetes berdasarkan data yang dimasukkan pengguna seperti tingkat aktivitas, diet, dan biometrik.',
    algorithm: 'Klasifikasi (SVM, Random Forest)',
    formula: 'Batas keputusan',
    dataset: 'Catatan kesehatan, log pengguna',
    chart: <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie data={[{name: 'Risiko Rendah', value: 75}, {name: 'Risiko Tinggi', value: 25}]} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
          <Cell fill="#82ca9d" />
          <Cell fill="#F59E0B" />
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  },
];

const fieldConfig = {
  'Sains Data': { icon: FlaskConical, color: 'bg-indigo-100 text-indigo-800' },
  'Analisis Data': { icon: ClipboardList, color: 'bg-green-100 text-green-800' },
  'Rekayasa ML': { icon: Code2, color: 'bg-pink-100 text-pink-800' },
};

const ProjectCard: React.FC<{ project: typeof projects[0] }> = ({ project }) => {
  const config = fieldConfig[project.field as keyof typeof fieldConfig] || fieldConfig['Sains Data'];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
    >
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900 pr-4">{project.title}</h3>
          <span className={`flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full shrink-0 ${config.color}`}>
            <Icon className="h-3 w-3 mr-1" />
            {project.field}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
        
        <div className="space-y-3 text-sm mb-4">
          <div className="flex">
            <strong className="w-28 shrink-0 text-gray-500">Algoritma:</strong>
            <span className="text-gray-800">{project.algorithm}</span>
          </div>
          <div className="flex">
            <strong className="w-28 shrink-0 text-gray-500">Rumus/Konsep:</strong>
            <code className="bg-gray-100 px-2 py-1 rounded text-gray-800">{project.formula}</code>
          </div>
          <div className="flex">
            <strong className="w-28 shrink-0 text-gray-500">Dataset:</strong>
            <span className="text-gray-800">{project.dataset}</span>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0">
        <h4 className="text-md font-semibold text-gray-800 mb-2">Contoh Hasil / Perhitungan</h4>
        <div className="bg-gray-50 p-2 rounded-lg">
          {project.chart}
        </div>
      </div>
    </motion.div>
  );
};

const Proyek: React.FC = () => {
  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Proyek-Proyek Machine Learning</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Jelajahi proyek-proyek ML umum dengan penjelasan, algoritma, dan contoh hasil.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proyek;
