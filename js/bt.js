const STORAGE_KEY = 'SET_EMS_REMOTE_MIC_V2';
const AUTH_STORAGE_KEY = 'SET_EMS_LOGGED';

const LABS_DATA = [
  { id: 'LAB-IT', name: 'Phòng Dạy học CNTT', dept: 'Khoa Công nghệ Thông tin', manager: 'TS. Đặng Thu Thảo', room: 'Khu A1 - P.201' },
  { id: 'LAB-EE', name: 'Phòng Thực hành Điện - Điện tử', dept: 'Khoa Điện - Điện tử', manager: 'ThS. Lê Quốc Bảo', room: 'Khu B1 - P.102' },
  { id: 'LAB-ME', name: 'Phòng Cơ khí - Động Lực', dept: 'Khoa Cơ khí - Động Lực', manager: 'TS. Trần Minh Hoàng', room: 'Khu C1 - P.101' },
  { id: 'LAB-CE', name: 'Phòng Thực hành Xây Dựng', dept: 'Khoa Xây Dựng', manager: 'ThS. Phạm Gia Hưng', room: 'Khu D1 - P.202' },
  { id: 'LAB-EN', name: 'Phòng Thí nghiệm Môi Trường', dept: 'Khoa Môi Trường', manager: 'TS. Võ Hoàng Yến', room: 'Khu E1 - P.105' }
];

const DEPARTMENTS = [
  'Khoa Công nghệ Thông tin',
  'Khoa Điện - Điện tử',
  'Khoa Xây Dựng',
  'Khoa Cơ khí - Động Lực',
  'Khoa Môi Trường'
];

const DEFAULT_STATE = {
  equipment: [
    {
      id: 'EQ1',
      code: 'SET-RML-001',
      name: 'Remote Máy lạnh Daikin Inverter',
      serial: 'SN-RML-1001',
      dept: 'Khoa Công nghệ Thông tin',
      lab: 'Phòng Dạy học CNTT',
      status: 'ready',
      specs: 'Điều khiển hồng ngoại, màn hình LCD, kèm 2 pin AAA'
    },
    {
      id: 'EQ2',
      code: 'SET-RTV-002',
      name: 'Remote Smart TV Sony 65 inch',
      serial: 'SN-RTV-2002',
      dept: 'Khoa Điện - Điện tử',
      lab: 'Phòng Thực hành Điện - Điện tử',
      status: 'ready',
      specs: 'Hỗ trợ tìm kiếm giọng nói, kết nối Bluetooth'
    },
    {
      id: 'EQ3',
      code: 'SET-RMC-003',
      name: 'Remote Máy chiếu Epson EB-X06',
      serial: 'SN-RMC-3003',
      dept: 'Khoa Cơ khí - Động Lực',
      lab: 'Phòng Cơ khí - Động Lực',
      status: 'borrowed',
      specs: 'Khoảng cách thu phát 10m, tích hợp nút dừng hình Freeze'
    },
    {
      id: 'EQ4',
      code: 'SET-MIC-004',
      name: 'Bộ Mic không dây & Loa trợ giảng JBL',
      serial: 'SN-MIC-4004',
      dept: 'Khoa Xây Dựng',
      lab: 'Phòng Thực hành Xây Dựng',
      status: 'ready',
      specs: 'Kèm 2 tay Mic không dây UHF, loa công suất 150W'
    },
    {
      id: 'EQ5',
      code: 'SET-MIC-005',
      name: 'Mic Loa phóng thanh cầm tay Takstar',
      serial: 'SN-MIC-5005',
      dept: 'Khoa Môi Trường',
      lab: 'Phòng Thí nghiệm Môi Trường',
      status: 'broken',
      specs: 'Pin sạc Lithium dung lượng cao, kèm dây đeo'
    },
    {
      id: 'EQ6',
      code: 'SET-RML-006',
      name: 'Remote Máy lạnh Panasonic 2HP',
      serial: 'SN-RML-6006',
      dept: 'Khoa Công nghệ Thông tin',
      lab: 'Phòng Dạy học CNTT',
      status: 'broken',
      specs: 'Điều khiển máy lạnh âm trần phòng máy'
    },
    {
      id: 'EQ7',
      code: 'SET-RMC-007',
      name: 'Remote Máy chiếu Panasonic PT-LB305',
      serial: 'SN-RMC-7007',
      dept: 'Khoa Điện - Điện tử',
      lab: 'Phòng Thực hành Điện - Điện tử',
      status: 'ready',
      specs: 'Kèm bút trình chiếu laser, 2 pin AAA'
    },
    {
      id: 'EQ8',
      code: 'SET-RTV-008',
      name: 'Remote TV Samsung QLED 75 inch',
      serial: 'SN-RTV-8008',
      dept: 'Khoa Xây Dựng',
      lab: 'Phòng Thực hành Xây Dựng',
      status: 'ready',
      specs: 'Sạc năng lượng mặt trời (SolarCell Remote)'
    }
  ],
  borrows: [
    {
      id: 'PM-1001',
      eqId: 'EQ3',
      eqCode: 'SET-RMC-003',
      eqName: 'Remote Máy chiếu Epson EB-X06',
      borrowerName: 'Lê Minh Tuấn',
      borrowerCode: '110124088',
      role: 'Sinh viên',
      purpose: 'Báo cáo tiểu luận tại Phòng Cơ khí C1-101',
      borrowDate: '2026-11-02',
      dueDate: '2026-11-05',
      status: 'borrowing'
    }
  ],
  maintenances: [
    {
      id: 'BH-2001',
      eqId: 'EQ5',
      eqCode: 'SET-MIC-005',
      eqName: 'Mic Loa phóng thanh cầm tay Takstar',
      type: 'Mất tín hiệu / Rè âm thanh',
      issue: 'Mic bật lên nguồn nhưng không thu được tiếng, loa bị rè khi tăng âm lượng.',
      date: '2026-11-01',
      status: 'processing'
    },
    {
      id: 'BH-2002',
      eqId: 'EQ6',
      eqCode: 'SET-RML-006',
      eqName: 'Remote Máy lạnh Panasonic 2HP',
      type: 'Hỏng phần cứng / Liệt nút',
      issue: 'Liệt nút bật/tắt nguồn và màn hình LCD bị mờ không hiện nhiệt độ.',
      date: '2026-11-03',
      status: 'processing'
    }
  ]
};

let appState = loadData();

// ==========================================
// 1. TIỆN ÍCH & LƯU TRỮ DỮ LIỆU
// ==========================================
function cloneDefaultState() {
  return JSON.parse(JSON.stringify(DEFAULT_STATE));
}

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const initial = cloneDefaultState();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
      return initial;
    }
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.equipment)) {
      const fallback = cloneDefaultState();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(fallback));
      return fallback;
    }
    return {
      equipment: parsed.equipment,
      borrows: Array.isArray(parsed.borrows) ? parsed.borrows : [],
      maintenances: Array.isArray(parsed.maintenances) ? parsed.maintenances : []
    };
  } catch (err) {
    const fallback = cloneDefaultState();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fallback));
    return fallback;
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  refreshAllViews();
}

function resetSampleData() {
  if (confirm('Khôi phục toàn bộ dữ liệu mẫu (Remote máy lạnh, Remote TV, Remote máy chiếu, Mic loa)?')) {
    appState = cloneDefaultState();
    saveData();
    showToast('Đã khôi phục dữ liệu mẫu thành công!');
  }
}

function getTodayLocalISO() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function isOverdue(dueDateStr, status) {
  if (status === 'returned' || !dueDateStr) return false;
  return dueDateStr < getTodayLocalISO();
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function generateRecordId(prefix, existingList) {
  const existingIds = new Set(existingList.map(item => item.id));
  let id;
  do {
    id = `${prefix}-${Math.floor(1000 + Math.random() * 9000)}`;
  } while (existingIds.has(id));
  return id;
}

function switchTab(tabId) {
  const targetTab = document.getElementById(`tab-${tabId}`);
  const targetNav = document.querySelector(`.nav-item[data-tab="${tabId}"]`);
  if (!targetTab || !targetNav) return;

  document.querySelectorAll('.tab-section').forEach(sec => sec.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));

  targetTab.classList.add('active');
  targetNav.classList.add('active');

  const titles = {
    dashboard: 'Tổng quan hệ thống',
    equipment: 'Danh mục Thiết bị (Remote, Mic, Loa)',
    borrow: 'Quản lý Mượn - Trả Thiết bị',
    maintenance: 'Danh sách Báo hỏng Thiết bị',
    labs: 'Danh sách Phòng học & Thực hành'
  };
  document.getElementById('pageTitle').textContent = titles[tabId] || 'SET-EMS';
  document.getElementById('sidebar').classList.remove('show');
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('show');
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('open');
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('open');
}

function showToast(msg) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ==========================================
// 2. RENDER DASHBOARD
// ==========================================
function renderDashboard() {
  const eqs = appState.equipment;
  const readyCount = eqs.filter(e => e.status === 'ready').length;
  const borrowedCount = eqs.filter(e => e.status === 'borrowed').length;
  const brokenCount = eqs.filter(e => e.status === 'broken').length;

  const activeBorrows = appState.borrows.filter(b => b.status === 'borrowing');
  const overdueBorrows = activeBorrows.filter(b => isOverdue(b.dueDate, b.status));

  document.getElementById('kpiTotal').textContent = eqs.length;
  document.getElementById('kpiReady').textContent = readyCount;
  document.getElementById('kpiBorrowed').textContent = borrowedCount;
  document.getElementById('kpiMaint').textContent = brokenCount;
  document.getElementById('kpiOverdueSub').textContent = `${overdueBorrows.length} phiếu quá hạn`;

  document.getElementById('navEquipmentCount').textContent = eqs.length;
  document.getElementById('navBorrowCount').textContent = activeBorrows.length;
  document.getElementById('navMaintCount').textContent = brokenCount;

  const deptHtml = DEPARTMENTS.map(dept => {
    const items = eqs.filter(e => e.dept === dept);
    const percent = eqs.length ? Math.round((items.length / eqs.length) * 100) : 0;
    return `
      <div class="dept-row">
        <div class="dept-meta">
          <span>${escapeHtml(dept)}</span>
          <span><strong>${items.length}</strong> thiết bị</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width: ${percent}%"></div>
        </div>
      </div>
    `;
  }).join('');
  document.getElementById('deptDistributionList').innerHTML = deptHtml;

  const alerts = [];
  overdueBorrows.forEach(b => {
    alerts.push(`
      <div class="alert-item danger">
        <i class="ri-alarm-warning-fill"></i>
        <div>
          <strong>Quá hạn trả thiết bị: ${escapeHtml(b.eqName)} (${escapeHtml(b.eqCode)})</strong>
          <p class="text-muted">Người mượn: ${escapeHtml(b.borrowerName)} (${escapeHtml(b.borrowerCode)}) - Hạn trả: ${escapeHtml(b.dueDate)}</p>
        </div>
      </div>
    `);
  });

  appState.maintenances
    .filter(m => m.status === 'processing')
    .forEach(m => {
      alerts.push(`
        <div class="alert-item danger">
          <i class="ri-error-warning-fill"></i>
          <div>
            <strong>Báo hỏng (${escapeHtml(m.type)}): ${escapeHtml(m.eqName)} (${escapeHtml(m.eqCode)})</strong>
            <p class="text-muted">${escapeHtml(m.issue)}</p>
          </div>
        </div>
      `);
    });

  document.getElementById('dashboardAlerts').innerHTML = alerts.length
    ? alerts.join('')
    : '<p class="text-muted">Tất cả thiết bị đang vận hành ổn định, không có cảnh báo hỏng hóc hoặc quá hạn.</p>';
}

// ==========================================
// 3. QUẢN LÝ THIẾT BỊ
// ==========================================
function getStatusBadge(status) {
  const map = {
    ready: '<span class="badge ready">Sẵn sàng</span>',
    borrowed: '<span class="badge borrowed">Đang mượn</span>',
    broken: '<span class="badge broken">Báo hỏng</span>'
  };
  return map[status] || escapeHtml(status);
}

function getStatusText(status) {
  const map = {
    ready: 'Sẵn sàng',
    borrowed: 'Đang mượn',
    broken: 'Báo hỏng'
  };
  return map[status] || status;
}

function renderEquipmentTable() {
  const keyword = document.getElementById('searchEq').value.toLowerCase().trim();
  const dept = document.getElementById('filterDept').value;
  const status = document.getElementById('filterStatus').value;

  const filtered = appState.equipment.filter(e => {
    const matchKw =
      e.code.toLowerCase().includes(keyword) ||
      e.name.toLowerCase().includes(keyword) ||
      e.serial.toLowerCase().includes(keyword) ||
      e.lab.toLowerCase().includes(keyword);
    const matchDept = dept === 'ALL' || e.dept === dept;
    const matchStatus = status === 'ALL' || e.status === status;
    return matchKw && matchDept && matchStatus;
  });

  const tbody = document.getElementById('equipmentTableBody');
  if (!filtered.length) {
    tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:24px;">Không tìm thấy thiết bị phù hợp.</td></tr>';
    return;
  }

  tbody.innerHTML = filtered.map(e => `
    <tr>
      <td><span class="code-badge">${escapeHtml(e.code)}</span></td>
      <td>
        <strong>${escapeHtml(e.name)}</strong>
        <div class="text-muted">S/N: ${escapeHtml(e.serial)}${e.specs ? ' | ' + escapeHtml(e.specs) : ''}</div>
      </td>
      <td>${escapeHtml(e.dept)}</td>
      <td>${escapeHtml(e.lab)}</td>
      <td>${getStatusBadge(e.status)}</td>
      <td class="text-right">
        <button type="button" class="btn-icon" title="Xem mã QR" onclick="openQRModal('${escapeHtml(e.id)}')"><i class="ri-qr-code-line"></i></button>
        <button type="button" class="btn-icon" title="Chỉnh sửa" onclick="openEquipmentModal('${escapeHtml(e.id)}')"><i class="ri-edit-line"></i></button>
        <button type="button" class="btn-icon" title="Xóa" onclick="deleteEquipment('${escapeHtml(e.id)}')"><i class="ri-delete-bin-line"></i></button>
      </td>
    </tr>
  `).join('');
}

function populateLabSelect() {
  const select = document.getElementById('eqLab');
  select.innerHTML = LABS_DATA.map(l => `<option value="${escapeHtml(l.name)}">${escapeHtml(l.name)}</option>`).join('');
}

function openEquipmentModal(editId = null) {
  populateLabSelect();
  const form = document.getElementById('equipmentForm');
  form.reset();

  if (editId) {
    const eq = appState.equipment.find(x => x.id === editId);
    if (!eq) return;
    document.getElementById('eqModalTitle').textContent = 'Cập Nhật Thiết Bị';
    document.getElementById('eqEditId').value = eq.id;
    document.getElementById('eqCode').value = eq.code;
    document.getElementById('eqSerial').value = eq.serial;
    document.getElementById('eqName').value = eq.name;
    document.getElementById('eqDept').value = eq.dept;
    document.getElementById('eqLab').value = eq.lab;
    document.getElementById('eqStatus').value = eq.status;
    document.getElementById('eqSpecs').value = eq.specs || '';
  } else {
    document.getElementById('eqModalTitle').textContent = 'Thêm Thiết Bị Mới';
    document.getElementById('eqEditId').value = '';
  }
  openModal('equipmentModal');
}

function saveEquipment(e) {
  e.preventDefault();
  const editId = document.getElementById('eqEditId').value;
  const code = document.getElementById('eqCode').value.trim();

  const duplicateCode = appState.equipment.some(
    x => x.code.toLowerCase() === code.toLowerCase() && x.id !== editId
  );
  if (duplicateCode) {
    alert(`Mã thiết bị "${code}" đã tồn tại! Vui lòng nhập mã khác.`);
    return;
  }

  const payload = {
    id: editId || 'EQ' + Date.now(),
    code,
    serial: document.getElementById('eqSerial').value.trim(),
    name: document.getElementById('eqName').value.trim(),
    dept: document.getElementById('eqDept').value,
    lab: document.getElementById('eqLab').value,
    status: document.getElementById('eqStatus').value,
    specs: document.getElementById('eqSpecs').value.trim()
  };

  if (editId) {
    const idx = appState.equipment.findIndex(x => x.id === editId);
    if (idx > -1) {
      appState.equipment[idx] = payload;
      if (payload.status !== 'borrowed') {
        appState.borrows.forEach(b => {
          if (b.eqId === payload.id && b.status === 'borrowing') {
            b.status = 'returned';
          }
        });
      }
    }
    showToast('Đã cập nhật thông tin thiết bị!');
  } else {
    appState.equipment.unshift(payload);
    showToast('Đã thêm thiết bị mới vào hệ thống!');
  }

  closeModal('equipmentModal');
  saveData();
}

function deleteEquipment(id) {
  const eq = appState.equipment.find(x => x.id === id);
  if (!eq) return;

  if (eq.status === 'borrowed') {
    alert(`Thiết bị "${eq.name}" (${eq.code}) đang được cho mượn. Vui lòng nhận trả thiết bị trước khi xóa!`);
    return;
  }

  if (confirm(`Bạn có chắc muốn xóa thiết bị "${eq.name}" (${eq.code})?`)) {
    appState.equipment = appState.equipment.filter(x => x.id !== id);
    saveData();
    showToast('Đã xóa thiết bị.');
  }
}

function openQRModal(id) {
  const eq = appState.equipment.find(x => x.id === id);
  if (!eq) return;
  const qrData = encodeURIComponent(`SET-EMS|${eq.code}|${eq.name}|${eq.lab}`);
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${qrData}`;

  document.getElementById('qrModalContent').innerHTML = `
    <div class="qr-ticket">
      <h4>TRƯỜNG KỸ THUẬT &amp; CÔNG NGHỆ</h4>
      <p class="text-muted">${escapeHtml(eq.dept)}</p>
      <img src="${qrUrl}" alt="QR Code ${escapeHtml(eq.code)}" />
      <p><span class="code-badge">${escapeHtml(eq.code)}</span></p>
      <h4 style="margin-top:6px;">${escapeHtml(eq.name)}</h4>
      <p class="text-muted">S/N: ${escapeHtml(eq.serial)} | ${escapeHtml(eq.lab)}</p>
    </div>
  `;
  openModal('qrModal');
}

// ==========================================
// 4. QUẢN LÝ MƯỢN - TRẢ
// ==========================================
function renderBorrowTable() {
  const filter = document.getElementById('filterBorrowStatus').value;
  const list = appState.borrows.filter(b => {
    const overdue = isOverdue(b.dueDate, b.status);
    if (filter === 'ALL') return true;
    if (filter === 'overdue') return overdue;
    if (filter === 'borrowing') return b.status === 'borrowing' && !overdue;
    return b.status === filter;
  });

  const tbody = document.getElementById('borrowTableBody');
  if (!list.length) {
    tbody.innerHTML = '<tr><td colspan="8" style="text-align:center;padding:24px;">Chưa có phiếu mượn nào trong danh sách.</td></tr>';
    return;
  }

  tbody.innerHTML = list.map(b => {
    const overdue = isOverdue(b.dueDate, b.status);
    let badge = '<span class="badge ready">Đã hoàn trả</span>';
    if (b.status === 'borrowing') {
      badge = overdue
        ? '<span class="badge overdue">Quá hạn trả</span>'
        : '<span class="badge borrowed">Đang mượn</span>';
    }

    return `
      <tr>
        <td><span class="code-badge">${escapeHtml(b.id)}</span></td>
        <td><strong>${escapeHtml(b.eqName)}</strong><div class="text-muted">${escapeHtml(b.eqCode)}</div></td>
        <td><strong>${escapeHtml(b.borrowerName)}</strong><div class="text-muted">${escapeHtml(b.borrowerCode)} (${escapeHtml(b.role)})</div></td>
        <td>${escapeHtml(b.purpose)}</td>
        <td>${escapeHtml(b.borrowDate)}</td>
        <td>${escapeHtml(b.dueDate)}</td>
        <td>${badge}</td>
        <td class="text-right">
          ${b.status === 'borrowing'
            ? `<button type="button" class="btn btn-success btn-sm" onclick="returnEquipment('${escapeHtml(b.id)}')"><i class="ri-check-line"></i> Nhận trả</button>`
            : '<span class="text-muted">Hoàn tất</span>'}
        </td>
      </tr>
    `;
  }).join('');
}

function openBorrowModal() {
  const readyEqs = appState.equipment.filter(e => e.status === 'ready');
  const select = document.getElementById('borrowEqId');
  if (!readyEqs.length) {
    alert('Hiện không có thiết bị nào ở trạng thái Sẵn sàng để cho mượn!');
    return;
  }
  select.innerHTML = readyEqs
    .map(e => `<option value="${escapeHtml(e.id)}">${escapeHtml(e.code)} - ${escapeHtml(e.name)}</option>`)
    .join('');
  document.getElementById('borrowForm').reset();
  document.getElementById('borrowDueDate').value = getTodayLocalISO();
  openModal('borrowModal');
}

function saveBorrow(e) {
  e.preventDefault();
  const eqId = document.getElementById('borrowEqId').value;
  const eq = appState.equipment.find(x => x.id === eqId);
  if (!eq || eq.status !== 'ready') {
    alert('Thiết bị này hiện không sẵn sàng để cho mượn!');
    return;
  }

  const newBorrow = {
    id: generateRecordId('PM', appState.borrows),
    eqId: eq.id,
    eqCode: eq.code,
    eqName: eq.name,
    borrowerName: document.getElementById('borrowerName').value.trim(),
    borrowerCode: document.getElementById('borrowerCode').value.trim(),
    role: document.getElementById('borrowerRole').value,
    purpose: document.getElementById('borrowPurpose').value.trim(),
    borrowDate: getTodayLocalISO(),
    dueDate: document.getElementById('borrowDueDate').value,
    status: 'borrowing'
  };

  eq.status = 'borrowed';
  appState.borrows.unshift(newBorrow);
  closeModal('borrowModal');
  saveData();
  showToast('Đã lập phiếu mượn thiết bị thành công!');
}

function returnEquipment(borrowId) {
  const record = appState.borrows.find(b => b.id === borrowId);
  if (!record || record.status === 'returned') return;
  record.status = 'returned';

  const eq = appState.equipment.find(e => e.id === record.eqId);
  if (eq && eq.status !== 'broken') {
    eq.status = 'ready';
  }

  saveData();
  showToast(`Đã nhận trả thiết bị ${record.eqName}!`);
}

// ==========================================
// 5. QUẢN LÝ BÁO HỎNG THIẾT BỊ
// ==========================================
function renderMaintenanceTable() {
  const tbody = document.getElementById('maintenanceTableBody');
  if (!appState.maintenances.length) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;padding:24px;">Chưa có phiếu báo hỏng nào.</td></tr>';
    return;
  }

  tbody.innerHTML = appState.maintenances.map(m => `
    <tr>
      <td><span class="code-badge">${escapeHtml(m.id)}</span></td>
      <td><strong>${escapeHtml(m.eqName)}</strong><div class="text-muted">${escapeHtml(m.eqCode)}</div></td>
      <td>${escapeHtml(m.type)}</td>
      <td>${escapeHtml(m.issue)}</td>
      <td>${escapeHtml(m.date)}</td>
      <td>
        ${m.status === 'processing'
          ? '<span class="badge broken">Đang báo hỏng</span>'
          : '<span class="badge ready">Đã khắc phục</span>'}
      </td>
      <td class="text-right">
        ${m.status === 'processing'
          ? `<button type="button" class="btn btn-primary btn-sm" onclick="completeMaintenance('${escapeHtml(m.id)}')"><i class="ri-check-line"></i> Đã sửa / Thay pin</button>`
          : '<span class="text-muted">Đã xong</span>'}
      </td>
    </tr>
  `).join('');
}

function openMaintenanceModal() {
  const select = document.getElementById('maintEqId');
  const availableEqs = appState.equipment.filter(e => e.status !== 'broken');
  if (!availableEqs.length) {
    alert('Tất cả thiết bị hiện đã nằm trong danh sách báo hỏng!');
    return;
  }
  select.innerHTML = availableEqs
    .map(e => `<option value="${escapeHtml(e.id)}">${escapeHtml(e.code)} - ${escapeHtml(e.name)}</option>`)
    .join('');
  document.getElementById('maintenanceForm').reset();
  openModal('maintenanceModal');
}

function saveMaintenance(e) {
  e.preventDefault();
  const eqId = document.getElementById('maintEqId').value;
  const eq = appState.equipment.find(x => x.id === eqId);
  if (!eq) return;

  const type = document.getElementById('maintType').value;
  const record = {
    id: generateRecordId('BH', appState.maintenances),
    eqId: eq.id,
    eqCode: eq.code,
    eqName: eq.name,
    type,
    issue: document.getElementById('maintIssue').value.trim(),
    date: getTodayLocalISO(),
    status: 'processing'
  };

  if (eq.status === 'borrowed') {
    appState.borrows.forEach(b => {
      if (b.eqId === eq.id && b.status === 'borrowing') {
        b.status = 'returned';
      }
    });
  }

  eq.status = 'broken';
  appState.maintenances.unshift(record);
  closeModal('maintenanceModal');
  saveData();
  showToast('Đã ghi nhận báo hỏng thiết bị!');
}

function completeMaintenance(maintId) {
  const record = appState.maintenances.find(m => m.id === maintId);
  if (!record || record.status === 'completed') return;
  record.status = 'completed';

  const eq = appState.equipment.find(e => e.id === record.eqId);
  if (eq) eq.status = 'ready';

  saveData();
  showToast(`Đã khắc phục sự cố, thiết bị ${record.eqName} sẵn sàng hoạt động!`);
}

// ==========================================
// 6. PHÒNG HỌC & XUẤT CSV
// ==========================================
function renderLabsGrid() {
  const grid = document.getElementById('labsGrid');
  grid.innerHTML = LABS_DATA.map(lab => {
    const items = appState.equipment.filter(e => e.lab === lab.name);
    const ready = items.filter(e => e.status === 'ready').length;
    const broken = items.filter(e => e.status === 'broken').length;

    return `
      <div class="lab-card">
        <span class="code-badge">${escapeHtml(lab.room)}</span>
        <h4 style="margin-top:8px;">${escapeHtml(lab.name)}</h4>
        <p class="text-muted">${escapeHtml(lab.dept)}</p>
        <p class="text-muted" style="margin-top:4px;"><i class="ri-user-star-line"></i> Phụ trách: <strong>${escapeHtml(lab.manager)}</strong></p>
        <div class="lab-stats">
          <div class="lab-stat-box">
            <strong>${items.length}</strong>
            <span class="text-muted">Tổng TB</span>
          </div>
          <div class="lab-stat-box">
            <strong style="color:var(--success)">${ready}</strong>
            <span class="text-muted">Sẵn sàng</span>
          </div>
          <div class="lab-stat-box">
            <strong style="color:var(--danger)">${broken}</strong>
            <span class="text-muted">Báo hỏng</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function exportEquipmentCSV() {
  const headers = ['Mã Thiết Bị', 'Tên Thiết Bị', 'Serial', 'Khoa Quản Lý', 'Phòng Học', 'Trạng Thái', 'Thông Số / Ghi Chú'];
  const csvEscape = val => `"${String(val ?? '').replace(/"/g, '""')}"`;

  const rows = appState.equipment.map(e => [
    csvEscape(e.code),
    csvEscape(e.name),
    csvEscape(e.serial),
    csvEscape(e.dept),
    csvEscape(e.lab),
    csvEscape(getStatusText(e.status)),
    csvEscape(e.specs)
  ]);

  const csvContent = '\uFEFF' + [headers.map(csvEscape).join(','), ...rows.map(r => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `Danh_Muc_Thiet_Bi_SET_${getTodayLocalISO()}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast('Đã xuất file Excel (CSV) thành công!');
}

function refreshAllViews() {
  renderDashboard();
  renderEquipmentTable();
  renderBorrowTable();
  renderMaintenanceTable();
  renderLabsGrid();
}

// ==========================================
// 7. QUẢN LÝ ĐĂNG NHẬP / ĐĂNG XUẤT
// ==========================================
function setAuthUI(isLoggedIn) {
  const loginOverlay = document.getElementById('loginOverlay');
  const appContainer = document.querySelector('.app-container');
  const sidebar = document.getElementById('sidebar');

  if (isLoggedIn) {
    if (loginOverlay) loginOverlay.style.display = 'none';
    if (appContainer) appContainer.style.display = 'flex';
  } else {
    if (sidebar) sidebar.classList.remove('show');
    if (appContainer) appContainer.style.display = 'none';
    if (loginOverlay) loginOverlay.style.display = 'flex';
  }
}

function checkAuth() {
  const isLogged = sessionStorage.getItem(AUTH_STORAGE_KEY) === 'true';
  setAuthUI(isLogged);
}

function handleLogin(e) {
  e.preventDefault();
  const userInput = document.getElementById('loginUser');
  const passInput = document.getElementById('loginPass');
  const user = userInput.value.trim().toLowerCase();
  const pass = passInput.value.trim();

  // Tài khoản mặc định: 110124170@st.tvu.edu.vn / 12345
  if (user === '110124170@st.tvu.edu.vn' && pass === '12345') {
    sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
    setAuthUI(true);
    refreshAllViews();
    e.target.reset();
    showToast('Đăng nhập hệ thống thành công!');
  } else {
    alert('Tên đăng nhập hoặc mật khẩu không chính xác! (Tài khoản: 110124170@st.tvu.edu.vn / Mật khẩu: 12345)');
    passInput.value = '';
    passInput.focus();
  }
}

function handleLogout() {
  sessionStorage.removeItem(AUTH_STORAGE_KEY);
  document.querySelectorAll('.modal-overlay.open').forEach(modal => modal.classList.remove('open'));

  const loginForm = document.querySelector('#loginOverlay form');
  if (loginForm) loginForm.reset();

  setAuthUI(false);
  showToast('Đã đăng xuất khỏi hệ thống!');
}

// ==========================================
// 8. KHỞI TẠO HỆ THỐNG (BẮT BUỘC PHẢI CÓ)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  checkAuth();

  const dateDisplay = document.getElementById('currentDateDisplay');
  if (dateDisplay) {
    dateDisplay.textContent =
      'Hôm nay: ' + new Date().toLocaleDateString('vi-VN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }

  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', evt => {
      if (evt.target === overlay) {
        overlay.classList.remove('open');
      }
    });
  });

  document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.open').forEach(modal => modal.classList.remove('open'));
    }
  });

  refreshAllViews();
});