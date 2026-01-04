'use client';

import { useState, useEffect } from 'react';

const FormInput = ({ onAddData, editingData, onUpdateData, onCancelEdit }) => {
  const [formData, setFormData] = useState({
    id: Date.now(),
    name: '',
    email: '',
    age: '',
    city: ''
  });

  useEffect(() => {
    if (editingData) {
      setFormData(editingData);
    } else {
      setFormData({
        id: Date.now(),
        name: '',
        email: '',
        age: '',
        city: ''
      });
    }
  }, [editingData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      alert('Nama dan Email harus diisi!');
      return;
    }

    if (editingData) {
      onUpdateData(formData);
    } else {
      onAddData({ ...formData, id: Date.now() });
    }

    if (!editingData) {
      setFormData({
        id: Date.now(),
        name: '',
        email: '',
        age: '',
        city: ''
      });
    }
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.title}>{editingData ? 'Edit Data' : 'Tambah Data Baru'}</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Nama:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Masukkan nama"
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Masukkan email"
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="age" style={styles.label}>Usia:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Masukkan usia"
            min="0"
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="city" style={styles.label}>Kota:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Masukkan kota"
            style={styles.input}
          />
        </div>

        <div style={styles.formButtons}>
          <button type="submit" style={styles.btnSubmit}>
            {editingData ? 'Update Data' : 'Tambah Data'}
          </button>
          
          {editingData && (
            <button 
              type="button" 
              style={styles.btnCancel}
              onClick={onCancelEdit}
            >
              Batal Edit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

const styles = {
  formContainer: {
    backgroundColor: 'white',
    padding: '25px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    height: 'fit-content'
  },
  title: {
    marginBottom: '20px',
    color: '#333',
    borderBottom: '2px solid #2575fc',
    paddingBottom: '10px',
    fontSize: '1.5rem'
  },
  formGroup: {
    marginBottom: '20px'
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '600',
    color: '#555',
    fontSize: '0.9rem'
  },
  input: {
    width: '100%',
    padding: '12px 15px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '1rem',
    transition: 'border-color 0.3s'
  },
  formButtons: {
    display: 'flex',
    gap: '15px',
    marginTop: '25px'
  },
  btnSubmit: {
    padding: '12px 25px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s',
    flex: 1,
    backgroundColor: '#2575fc',
    color: 'white'
  },
  btnCancel: {
    padding: '12px 25px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s',
    flex: 1,
    backgroundColor: '#f1f1f1',
    color: '#333'
  }
};

export default FormInput;