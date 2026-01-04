'use client';

const PopupDetail = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div style={styles.popupOverlay} onClick={onClose}>
      <div style={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <div style={styles.popupHeader}>
          <h3 style={styles.popupTitle}>Detail Data</h3>
          <button style={styles.btnClose} onClick={onClose}>×</button>
        </div>
        
        <div style={styles.popupBody}>
          <div style={styles.detailRow}>
            <span style={styles.detailLabel}>ID:</span>
            <span style={styles.detailValue}>{data.id}</span>
          </div>
          
          <div style={styles.detailRow}>
            <span style={styles.detailLabel}>Nama:</span>
            <span style={styles.detailValue}>{data.name}</span>
          </div>
          
          <div style={styles.detailRow}>
            <span style={styles.detailLabel}>Email:</span>
            <span style={styles.detailValue}>{data.email}</span>
          </div>
          
          <div style={styles.detailRow}>
            <span style={styles.detailLabel}>Usia:</span>
            <span style={styles.detailValue}>{data.age || '-'}</span>
          </div>
          
          <div style={styles.detailRow}>
            <span style={styles.detailLabel}>Kota:</span>
            <span style={styles.detailValue}>{data.city || '-'}</span>
          </div>
          
          <div style={styles.detailRow}>
            <span style={styles.detailLabel}>Ditambahkan:</span>
            <span style={styles.detailValue}>
              {new Date(data.id).toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </span>
          </div>
        </div>
        
        <div style={styles.popupFooter}>
          <button style={styles.btnOk} onClick={onClose}>
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  popupOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    animation: 'fadeIn 0.3s'
  },
  popupContent: {
    backgroundColor: 'white',
    width: '90%',
    maxWidth: '500px',
    borderRadius: '10px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    animation: 'slideUp 0.3s',
    overflow: 'hidden'
  },
  popupHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 25px',
    borderBottom: '1px solid #eee',
    backgroundColor: '#f8f9fa'
  },
  popupTitle: {
    margin: 0,
    color: '#333',
    fontSize: '1.3rem'
  },
  btnClose: {
    background: 'none',
    border: 'none',
    fontSize: '1.8rem',
    cursor: 'pointer',
    color: '#999',
    transition: 'color 0.3s',
    lineHeight: 1,
    padding: 0,
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%'
  },
  popupBody: {
    padding: '25px',
    maxHeight: '400px',
    overflowY: 'auto'
  },
  detailRow: {
    display: 'flex',
    marginBottom: '15px',
    paddingBottom: '15px',
    borderBottom: '1px solid #f5f5f5'
  },
  detailLabel: {
    fontWeight: '600',
    color: '#555',
    width: '120px',
    flexShrink: 0,
    fontSize: '0.9rem'
  },
  detailValue: {
    color: '#333',
    flex: 1,
    fontSize: '0.9rem'
  },
  popupFooter: {
    padding: '20px 25px',
    borderTop: '1px solid #eee',
    textAlign: 'right',
    backgroundColor: '#f8f9fa'
  },
  btnOk: {
    padding: '10px 25px',
    backgroundColor: '#2575fc',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  }
};

// Tambahkan style untuk animasi
const styleSheet = document.styleSheets[0];
if (styleSheet) {
  styleSheet.insertRule(`
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `, styleSheet.cssRules.length);
  
  styleSheet.insertRule(`
    @keyframes slideUp {
      from { transform: translateY(30px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  `, styleSheet.cssRules.length);
}

export default PopupDetail;