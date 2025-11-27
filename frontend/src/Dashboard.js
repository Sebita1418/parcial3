import React from 'react';
import { FaCalendarAlt, FaUserFriends, FaDollarSign, FaChartLine, FaPlusCircle, FaRegCalendarCheck, FaUserPlus } from 'react-icons/fa';

function Dashboard({ usuario }) {
  const citasHoy = [
    { nombre: 'Ana García', servicio: 'Manicure + Diseño', hora: '09:00 AM', estado: 'Completada' },
    { nombre: 'Laura Martínez', servicio: 'Pedicure Spa', hora: '10:30 AM', estado: 'Completada' }
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'linear-gradient(120deg,#f9f6fd,#fbeaff 80%)', fontFamily: 'sans-serif' }}>
      {/* Menú lateral */}
      <aside style={{ background: '#fff', width: '210px', minHeight: '100vh', boxShadow: '0 0 15px #eee', borderRadius: '0 22px 22px 0', padding: '2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
          <img src="https://img.icons8.com/pastel-glyph/64/000000/nail-polish.png" width="46" alt="" />
          <div style={{ fontWeight: 700, color: '#aa7bc3', fontSize: '1.15rem', marginTop: '8px' }}>Nail Studio</div>
          <small style={{ color: '#b4aee8', fontSize: '0.95rem' }}>Sistema de Gestión</small>
        </div>
        <nav style={{ width: '100%' }}>
          <button style={menuBtnStyle}><FaCalendarAlt /> Gestión de Citas</button>
          <button style={menuBtnStyle}><FaUserFriends /> Clientes</button>
          <button style={menuBtnStyle}><FaRegCalendarCheck /> Servicios</button>
          <button style={menuBtnStyle}><FaChartLine /> Reportes</button>
          <button style={menuBtnStyle}><FaUserPlus /> Perfil</button>
        </nav>
        <button style={{ ...menuBtnStyle, marginTop: '4rem', color: '#aa7bc3' }}>Cerrar Sesión</button>
      </aside>

      {/* Main Dashboard */}
      <main style={{ flex: 1, padding: '2rem 3rem' }}>
        {/* Encabezado con nombre dinámico de usuario */}
        <div style={{ marginBottom: '1rem' }}>
          <h2 style={{ color: '#aa7bc3', fontWeight: 700, fontSize: '1.7rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
            ¡Hola, {usuario}! <span role="img" aria-label="saludo">👋</span>
          </h2>
          <div style={{ marginTop: 4, color: '#a4a3ca', fontWeight: 500, fontSize: '1rem' }}>
            Bienvenida de vuelta, tienes un día ocupado hoy
          </div>
        </div>
        {/* Tarjetas métricas - datos estáticos por ahora */}
        <div style={{ display: 'flex', gap: '1.7rem', marginBottom: '1.8rem' }}>
          <Card icon={<FaCalendarAlt color="#aa7bc3"/>} title="Citas Hoy" value="12" desc="3 pendientes" />
          <Card icon={<FaUserFriends color="#aa7bc3"/>} title="Clientes" value="248" desc="+15 este mes" />
          <Card icon={<FaDollarSign color="#aa7bc3"/>} title="Ingresos Hoy" value="$830" desc="+12% vs ayer" />
          <Card icon={<FaChartLine color="#aa7bc3"/>} title="Ocupación" value="85%" desc="Muy bueno" />
        </div>
        {/* Acciones rápidas (sin funcionalidad navegable aún) */}
        <div style={{ display: 'flex', gap: '1.7rem', marginBottom: '1.7rem' }}>
          <QuickAction title="Nueva Cita" desc="Programar una nueva cita" icon={<FaPlusCircle color="#b4aee8" />} />
          <QuickAction title="Ver Agenda Hoy" desc="Revisa las citas de hoy" icon={<FaCalendarAlt color="#cfbaf0" />} />
          <QuickAction title="Añadir Cliente" desc="Registrar nuevo cliente" icon={<FaUserPlus color="#f7cfff" />} />
        </div>
        {/* Listado de citas simuladas */}
        <section style={{ marginTop: '2.2rem', background: '#fff', borderRadius: '14px', boxShadow: '0 2px 12px #efeef3', padding: '1.5rem' }}>
          <div style={{ color: '#aa7bc3', fontWeight: 700, fontSize: '1.13rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
            Citas de Hoy <a href="#" style={{ color: '#b4aee8', fontSize: '0.96rem', textDecoration: 'none' }}>Ver todas</a>
          </div>
          <div>
            {citasHoy.map((c, i) =>
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: i < citasHoy.length - 1 ? '1px solid #fbeaff' : 'none', padding: '0.9rem 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                  <FaCalendarAlt color="#b4aee8" />
                  <span style={{ color: '#444', fontWeight: 600 }}>{c.nombre}</span>
                  <span style={{ color: '#888', fontWeight: 400 }}>{c.servicio}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
                  <span style={{ color: '#aa7bc3', fontWeight: 600 }}>{c.hora}</span>
                  <span style={{
                    background: '#e2ffe8',
                    color: '#58bb7b',
                    borderRadius: '8px',
                    padding: '3px 15px',
                    fontWeight: 700,
                    fontSize: '0.98rem'
                  }}>{c.estado}</span>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

function Card({ icon, title, value, desc }) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: '14px',
      boxShadow: '0 2px 10px #eee',
      padding: '1rem 1.4rem',
      minWidth: '130px',
      textAlign: 'center',
      flex: 1
    }}>
      <div style={{ fontSize: '1.8rem', marginBottom: '.2rem' }}>{icon}</div>
      <div style={{ color: '#444', fontSize: '1.9rem', fontWeight: 700 }}>{value}</div>
      <div style={{ color: '#aa7bc3', fontSize: '1rem', fontWeight: 500 }}>{title}</div>
      <div style={{ color: '#b4aee8', marginTop: '.2rem', fontSize: '0.97rem' }}>{desc}</div>
    </div>
  );
}

function QuickAction({ title, desc, icon }) {
  return (
    <div style={{
      background: '#f9f6fd',
      borderRadius: '14px',
      boxShadow: '0 2px 10px #fbeaff',
      padding: '1.1rem 1.4rem',
      minWidth: '160px',
      textAlign: 'center',
      flex: 1
    }}>
      <div style={{ fontSize: '1.7rem', marginBottom: '.2rem' }}>{icon}</div>
      <div style={{ color: '#444', fontSize: '1.07rem', fontWeight: 700 }}>{title}</div>
      <div style={{ color: '#aa7bc3', marginTop: '.1rem', fontSize: '0.98rem' }}>{desc}</div>
    </div>
  );
}

const menuBtnStyle = {
  display: 'flex',
  gap: '0.9rem',
  alignItems: 'center',
  background: '#f9f6fd',
  border: 'none',
  fontSize: '1.05rem',
  fontWeight: 600,
  color: '#444',
  padding: '0.8rem 1.5rem',
  width: '100%',
  marginBottom: '0.6rem',
  borderRadius: '11px',
  cursor: 'pointer',
  outline: 'none',
  transition: 'background 0.2s',
};

export default Dashboard;
