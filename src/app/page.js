'use client';

import { useState } from 'react';
import FormInput from '@/components/FormInput';
import DataTable from '@/components/DataTable';
import PopupDetail from '@/components/PopupDetail';

export default function HomePage() {
  const [data, setData] = useState([
    { id: 1, name: 'Budi Santoso', email: 'budi@example.com', age: 25, city: 'Jakarta' },
    { id: 2, name: 'Siti Aminah', email: 'siti@example.com', age: 30, city: 'Bandung' },
    { id: 3, name: 'Ahmad Abdullah', email: 'ahmad@example.com', age: 22, city: 'Surabaya' }
  ]);

  const [editingData, setEditingData] = useState(null);
  const [detailData, setDetailData] = useState(null);

  const handleAddData = (newData) => {
    setData([...data, newData]);
    alert('Data berhasil ditambahkan!');
  };

  const handleDeleteData = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus data ini?')) {
      const newData = data.filter(item => item.id !== id);
      setData(newData);
      alert('Data berhasil dihapus!');
    }
  };

  const handleEditData = (item) => {
    setEditingData(item);
  };

  const handleUpdateData = (updatedData) => {
    const newData = data.map(item => 
      item.id === updatedData.id ? updatedData : item
    );
    setData(newData);
    setEditingData(null);
    alert('Data berhasil diupdate!');
  };

  const handleCancelEdit = () => {
    setEditingData(null);
  };

  const handleShowDetail = (item) => {
    setDetailData(item);
  };

  const handleClosePopup = () => {
    setDetailData(null);
  };

  return (
    <div style={styles.appContainer}>
      <header style={styles.appHeader}>
        <h1 style={styles.appTitle}>Aplikasi CRUD Next.js</h1>
        <p style={styles.appSubtitle}>Input data dan kelola dengan tabel (Create, Read, Update, Delete)</p>
      </header>

      <main style={styles.appMain}>
        <FormInput 
          onAddData={handleAddData}
          editingData={editingData}
          onUpdateData={handleUpdateData}
          onCancelEdit={handleCancelEdit}
        />

        <DataTable 
          data={data}
          onEdit={handleEditData}
          onDelete={handleDeleteData}
          onShowDetail={handleShowDetail}
        />

        {detailData && (
          <PopupDetail 
            data={detailData}
            onClose={handleClosePopup}
          />
        )}
      </main>

      <footer style={styles.appFooter}>
        <p>© {new Date().getFullYear()} - Aplikasi CRUD Next.js Sederhana. Jumlah data: {data.length}</p>
      </footer>
    </div>
  );
}

const styles = {
  appContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  appHeader: {
    textAlign: 'center',
    padding: '30px 0',
    background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
    color: 'white',
    borderRadius: '10px',
    marginBottom: '30px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  },
  appTitle: {
    fontSize: '2.5rem',
    marginBottom: '10px'
  },
  appSubtitle: {
    fontSize: '1.1rem',
    opacity: 0.9
  },
  appMain: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '30px',
    marginBottom: '30px',
    flex: 1
  },
  appFooter: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#333',
    color: 'white',
    borderRadius: '10px',
    fontSize: '0.9rem',
    marginTop: 'auto'
  }
};

// Responsive styles
if (typeof window !== 'undefined') {
  const styleSheet = document.styleSheets[0];
  if (styleSheet) {
    styleSheet.insertRule(`
      @media (max-width: 768px) {
        .app-main {
          grid-template-columns: 1fr;
        }
      }
    `, styleSheet.cssRules.length);
  }
}