import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, TrendingUp, Target, Activity, CheckCircle, SlidersHorizontal, FileWarning } from 'lucide-react';

interface ModelTrainingProps {
  hasData: boolean;
  isProcessed: boolean;
}

const ModelTraining: React.FC<ModelTrainingProps> = ({ hasData, isProcessed }) => {
  const [selectedModel, setSelectedModel] = useState('');
  const [isTraining, setIsTraining] = useState(false);
  const [trainingComplete, setTrainingComplete] = useState(false);

  const models = [
    {
      id: 'regression',
      name: 'Regresi Linier',
      description: 'Memprediksi nilai kontinu berdasarkan hubungan linier.',
      useCase: 'Prediksi harga, peramalan penjualan',
    },
    {
      id: 'kmeans',
      name: 'K-Means Clustering',
      description: 'Mengelompokkan titik data yang mirip ke dalam cluster.',
      useCase: 'Segmentasi pelanggan, kategorisasi data',
    },
    {
      id: 'decisiontree',
      name: 'Pohon Keputusan',
      description: 'Model yang dapat diinterpretasikan yang membagi data berdasarkan nilai fitur.',
      useCase: 'Keputusan berbasis aturan, pentingnya fitur',
    },
    {
      id: 'randomforest',
      name: 'Random Forest',
      description: 'Metode ensemble untuk klasifikasi dan regresi.',
      useCase: 'Akurasi tinggi, prediksi yang kuat',
    },
    {
      id: 'svm',
      name: 'Support Vector Machine',
      description: 'Algoritma klasifikasi dan regresi yang kuat.',
      useCase: 'Klasifikasi teks, pengenalan gambar',
    },
    {
      id: 'naivebayes',
      name: 'Naive Bayes',
      description: "Pengklasifikasi probabilistik berdasarkan teorema Bayes.",
      useCase: 'Penyaringan spam, klasifikasi teks',
    },
  ];

  const handleTraining = () => {
    setIsTraining(true);
    setTrainingComplete(false);
    setTimeout(() => {
      setIsTraining(false);
      setTrainingComplete(true);
    }, 3000);
  };

  if (!hasData) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg p-8 text-center"
      >
        <FileWarning className="h-16 w-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Tidak Ada Data Tersedia</h3>
        <p className="text-gray-600">Silakan unggah dataset terlebih dahulu.</p>
      </motion.div>
    );
  }

  if (!isProcessed) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg p-8 text-center"
      >
        <SlidersHorizontal className="h-16 w-16 text-blue-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Belum Diproses</h3>
        <p className="text-gray-600">Silakan buka tab 'Proses Data' untuk menyiapkan dataset Anda sebelum pelatihan.</p>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Pilih Model ML</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {models.map((model) => (
            <div
              key={model.id}
              onClick={() => setSelectedModel(model.id)}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                selectedModel === model.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <h3 className="font-semibold text-gray-900 mb-2">{model.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{model.description}</p>
              <p className="text-blue-600 text-xs font-semibold">{model.useCase}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {selectedModel && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Konfigurasi Pelatihan</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kolom Target
              </label>
              <select className="w-full p-3 border border-gray-300 rounded-lg">
                <option>harga</option>
                <option>penjualan</option>
                <option>peringkat</option>
                <option>kategori</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pembagian Tes (%)
              </label>
              <input
                type="number"
                defaultValue={20}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleTraining}
              disabled={isTraining}
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isTraining ? (
                <>
                  <Activity className="h-5 w-5 animate-spin" />
                  <span>Melatih Model...</span>
                </>
              ) : (
                <>
                  <Play className="h-5 w-5" />
                  <span>Mulai Pelatihan</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      )}

      {isTraining && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Progres Pelatihan</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Pra-pemrosesan Data</span>
                <span>100%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full w-full"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Pelatihan Model</span>
                <span>65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full w-2/3 transition-all duration-1000"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Validasi</span>
                <span>0%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gray-400 h-2 rounded-full w-0"></div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {trainingComplete && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <div className="flex items-center space-x-2 mb-4">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <h3 className="text-xl font-semibold text-gray-900">Pelatihan Selesai</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">94.2%</div>
              <div className="text-gray-600">Akurasi</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">92.8%</div>
              <div className="text-gray-600">Presisi</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">95.1%</div>
              <div className="text-gray-600">Recall</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">93.9%</div>
              <div className="text-gray-600">F1-Score</div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Matriks Kebingungan</h4>
            <div className="grid grid-cols-2 gap-2 text-center text-sm">
              <div className="bg-green-100 p-2 rounded">TP: 456</div>
              <div className="bg-red-100 p-2 rounded">FP: 32</div>
              <div className="bg-red-100 p-2 rounded">FN: 28</div>
              <div className="bg-green-100 p-2 rounded">TN: 484</div>
            </div>
          </div>

          <div className="mt-6 flex space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Terapkan Model
            </button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              Unduh Model
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ModelTraining;
