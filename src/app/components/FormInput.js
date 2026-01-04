import React, { useState } from "react";
import './FormInput.css';

function FormInput({
    onAddData,
    editingdata,
    onUpdateData,
    onCancelEdit
}) {
    //state untuk menyimpan input form
    const [formData, setFormData] = useState({
        id: editingdata ? editingdata.id : Date.now(),
        name: editingdata ? editingdata.name : '',
        email: editingdata ? editingdata.email : '',
        age: editingdata ? editingdata.age : '',
        phone: editingdata ? editingdata.phone:''
    });

    //fungsi untuk menangani perubahan input
    const handlechange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    //fungsi untuk menangani submit form
    const handleSubmit = (e) => {
        e.preventDefault();

        //vailidasi sederhana
        if(!formData.name || !formData.email) {
            alert('Nama dan email harus diisi!');
            return;
        }

        if(editingdata) {
            onUpdateData(formData);
        } else {
            onAddData({...formData, id: Date.now()});
        }

        //reset form
        setFormData({
            id: Date.now(),
            name:'',
            email:'',
            age:'',
            phone:''
        });
    };

         return (
            <div className="form-container">
            <h2>{editingData ? 'Edit Data' : 'Tambah Data Baru'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="name">Nama:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama"
                    required
                />
                </div>

                <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Masukkan email"
                    required
                />
                </div>

                <div className="form-group">
                <label htmlFor="age">Usia:</label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Masukkan usia"
                    min="0"
                />
                </div>

                <div className="form-group">
                <label htmlFor="city">Kota:</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Masukkan kota"
                />
                </div>

                <div className="form-buttons">
                <button type="submit" className="btn-submit">
                    {editingData ? 'Update Data' : 'Tambah Data'}
                </button>
                
                {editingData && (
                    <button 
                    type="button" 
                    className="btn-cancel"
                    onClick={onCancelEdit}
                    >
                    Batal Edit
                    </button>
                )}
                </div>
            </form>
            </div>
        );
}