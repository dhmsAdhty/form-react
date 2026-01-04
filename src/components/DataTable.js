'use client';

const DataTable = ({ data, onEdit, onDelete, onShowDetail }) => {
  if (data.length === 0) {
    return (
      <div style={styles.dataTableEmpty}>
        <h3 style={styles.title}>Daftar Data</h3>
        <p style={styles.emptyMessage}>Tidak ada data. Silakan tambah data baru.</p>
      </div>
    );
  }

  return (
    <div style={styles.dataTable}>
      <h3 style={styles.title}>Daftar Data ({data.length} item)</h3>
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.tableHeaderRow}>
              <th style={styles.tableHeader}>No</th>
              <th style={styles.tableHeader}>Nama</th>
              <th style={styles.tableHeader}>Email</th>
              <th style={styles.tableHeader}>Usia</th>
              <th style={styles.tableHeader}>Kota</th>
              <th style={styles.tableHeader}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id} style={styles.tableRow}>
                <td style={styles.tableCell}>{index + 1}</td>
                <td style={styles.tableCell}>{item.name}</td>
                <td style={styles.tableCell}>{item.email}</td>
                <td style={styles.tableCell}>{item.age || '-'}</td>
                <td style={styles.tableCell}>{item.city || '-'}</td>
                <td style={styles.tableCell}>
                  <div style={styles.actionButtons}>
                    <button 
                      style={styles.btnShow}
                      onClick={() => onShowDetail(item)}
                      title="Lihat Detail"
                    >
                      👁️
                    </button>
                    <button 
                      style={styles.btnEdit}
                      onClick={() => onEdit(item)}
                      title="Edit"
                    >
                      ✏️
                    </button>
                    <button 
                      style={styles.btnDelete}
                      onClick={() => onDelete(item.id)}
                      title="Hapus"
                    >
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  dataTable: {
    backgroundColor: 'white',
    padding: '25px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden'
  },
  dataTableEmpty: {
    backgroundColor: 'white',
    padding: '40px 25px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  },
  title: {
    marginBottom: '20px',
    color: '#333',
    borderBottom: '2px solid #2575fc',
    paddingBottom: '10px',
    fontSize: '1.5rem'
  },
  emptyMessage: {
    color: '#666',
    fontSize: '1rem'
  },
  tableContainer: {
    overflowX: 'auto'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    minWidth: '600px'
  },
  tableHeaderRow: {
    backgroundColor: '#f8f9fa'
  },
  tableHeader: {
    padding: '15px',
    textAlign: 'left',
    fontWeight: '600',
    color: '#495057',
    borderBottom: '2px solid #dee2e6',
    fontSize: '0.9rem'
  },
  tableRow: {
    borderBottom: '1px solid #eee',
    transition: 'background-color 0.3s'
  },
  tableCell: {
    padding: '15px',
    borderBottom: '1px solid #eee',
    color: '#333',
    fontSize: '0.9rem'
  },
  actionButtons: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center'
  },
  btnShow: {
    width: '40px',
    height: '40px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    transition: 'all 0.3s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#17a2b8',
    color: 'white'
  },
  btnEdit: {
    width: '40px',
    height: '40px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    transition: 'all 0.3s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffc107',
    color: 'white'
  },
  btnDelete: {
    width: '40px',
    height: '40px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    transition: 'all 0.3s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dc3545',
    color: 'white'
  }
};

export default DataTable;