import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Camera, TrendingUp, Users, Zap } from 'lucide-react';
import ImagePrediction from '../components/ImagePrediction';
import RecommendationSystem from '../components/RecommendationSystem';

const Prediksi: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState('image');

  const features = [
    {
      id: 'image',
      title: 'Pengenalan Gambar',
      description: 'Unggah gambar untuk klasifikasi dan analisis bertenaga AI',
      icon: Camera,
      component: <ImagePrediction />,
    },
    {
      id: 'recommendation',
      title: 'Rekomendasi Produk',
      description: 'Dapatkan rekomendasi yang dipersonalisasi menggunakan collaborative filtering',
      icon: TrendingUp,
      component: <RecommendationSystem />,
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Prediksi AI</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rasakan kekuatan machine learning dengan model prediksi canggih kami
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-md font-medium transition-colors ${
                  activeFeature === feature.id
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <feature.icon className="h-5 w-5" />
                <span>{feature.title}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeFeature}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          {features.find((f) => f.id === activeFeature)?.component}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <h2 className="text-2xl font-bold text-center mb-8">Statistik Platform</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Brain className="h-8 w-8 mx-auto mb-2" />
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-blue-100">Model Dilatih</div>
            </div>
            <div>
              <Users className="h-8 w-8 mx-auto mb-2" />
              <div className="text-3xl font-bold mb-1">10K+</div>
              <div className="text-blue-100">Pengguna Aktif</div>
            </div>
            <div>
              <Zap className="h-8 w-8 mx-auto mb-2" />
              <div className="text-3xl font-bold mb-1">1M+</div>
              <div className="text-blue-100">Prediksi Dibuat</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Prediksi;
