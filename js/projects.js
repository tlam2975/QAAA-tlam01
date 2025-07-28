let currentProject = null;
let currentSection = 'overview';

// Load project data
function loadProject() {
    const projectId = localStorage.getItem('currentProjectId');
    if (!projectId) {
        alert('Không tìm thấy dự án!');
        window.location.href = 'UI.html';
        return;
    }

    const projects = JSON.parse(localStorage.getItem('neuProjects')) || [];
    currentProject = projects.find(p => p.id === projectId);

    if (!currentProject) {
        alert('Dự án không tồn tại!');
        window.location.href = 'UI.html';
        return;
    }

    // Update UI with project data
    document.getElementById('projectTitle').textContent = currentProject.title;
    document.getElementById('projectDescription').textContent = currentProject.description || 'Chưa có mô tả';

    updateOverview();
    updateStats();
    loadNotes();
    initializeSampleChart();
}

// Update overview section
function updateOverview() {
    document.getElementById('overviewTitle').textContent = currentProject.title;
    document.getElementById('overviewCategory').textContent = getCategoryName(currentProject.category);
    document.getElementById('overviewStatus').textContent = currentProject.status === 'active' ? 'Đang thực hiện' : 'Bản nháp';
    document.getElementById('overviewCreated').textContent = formatDate(currentProject.createdAt);

    // Update progress
    const hasData = currentProject.data && currentProject.data.length > 0;
    const hasCharts = currentProject.charts && currentProject.charts.length > 0;
    const hasReport = currentProject.reportContent && currentProject.reportContent.trim().length > 0;

    document.getElementById('dataProgress').innerHTML = hasData ? '✅ Thu thập dữ liệu' : '⏳ Thu thập dữ liệu';
    document.getElementById('analysisProgress').innerHTML = hasCharts ? '✅ Phân tích dữ liệu' : '⏳ Phân tích dữ liệu';
    document.getElementById('reportProgress').innerHTML = hasReport ? '✅ Viết báo cáo' : '⏳ Viết báo cáo';
}

// Update statistics
function updateStats() {
    const dataCount = currentProject.data ? currentProject.data.length : 0;
    const chartCount = currentProject.charts ? currentProject.charts.length : 0;
    const noteCount = currentProject.notes ? currentProject.notes.length : 0;

    document.getElementById('dataCount').textContent = dataCount;
    document.getElementById('chartCount').textContent = chartCount;
    document.getElementById('noteCount').textContent = noteCount;
    document.getElementById('lastUpdated').textContent = formatDate(currentProject.updatedAt);
    document.getElementById('notesCount').textContent = noteCount;
}

// Navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const section = this.dataset.section;
        if (section) {
            showSection(section);
        }
    });
});

function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Show target section
    document.getElementById(sectionName).classList.add('active');

    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');

    currentSection = sectionName;
}

// Notes functionality
function loadNotes() {
    const notesList = document.getElementById('notesList');
    const notes = currentProject.notes || [];

    if (notes.length === 0) {
        notesList.innerHTML = '<p style="text-align: center; color: #888; padding: 2rem;">Chưa có ghi chú nào</p>';
        return;
    }

    notesList.innerHTML = notes.map(note => `
                <div class="note-item">
                    <div class="note-header">
                        <span class="note-time">${formatDateTime(note.createdAt)}</span>
                        <button class="btn btn-primary btn-small" onclick="deleteNote('${note.id}')" style="padding: 4px 8px; font-size: 0.8rem;">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                    <div class="note-content">${note.content}</div>
                </div>
            `).join('');
}

function addNote() {
    const content = document.getElementById('newNoteContent').value.trim();
    if (!content) return;

    const note = {
        id: 'note_' + Date.now(),
        content: content,
        createdAt: new Date().toISOString()
    };

    if (!currentProject.notes) {
        currentProject.notes = [];
    }
    currentProject.notes.unshift(note);

    document.getElementById('newNoteContent').value = '';
    loadNotes();
    updateStats();
    saveProjectToStorage();
}

function deleteNote(noteId) {
    if (confirm('Bạn có chắc chắn muốn xóa ghi chú này?')) {
        currentProject.notes = currentProject.notes.filter(note => note.id !== noteId);
        loadNotes();
        updateStats();
        saveProjectToStorage();
    }
}

// Sample chart
function initializeSampleChart() {
    const ctx = document.getElementById('sampleChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Giỏi (8.5-10)', 'Khá (7.0-8.4)', 'Trung bình (5.5-6.9)', 'Yếu (4.0-5.4)', 'Kém (<4.0)'],
            datasets: [{
                data: [25, 35, 30, 8, 2],
                backgroundColor: [
                    '#4CAF50',
                    '#2196F3',
                    '#FF9800',
                    '#F44336',
                    '#9C27B0'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

// Functions for buttons
function saveProject() {
    currentProject.updatedAt = new Date().toISOString();
    saveProjectToStorage();
    alert('Dự án đã được lưu thành công!');
}

function saveProjectToStorage() {
    const projects = JSON.parse(localStorage.getItem('neuProjects')) || [];
    const index = projects.findIndex(p => p.id === currentProject.id);
    if (index !== -1) {
        projects[index] = currentProject;
        localStorage.setItem('neuProjects', JSON.stringify(projects));
    }
}

function importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.csv,.xlsx,.json';
    input.multiple = true;

    input.onchange = function (e) {
        const files = e.target.files;
        // Process your files here
        console.log('Selected files:', files);
    };
    input.click();
}






function connectDatabase() {
    alert('Đang kết nối với cơ sở dữ liệu NEU...');
}

function createChart() {
    alert('Tính năng tạo biểu đồ tùy chỉnh sẽ được cập nhật sớm!');
}

function runAnalysis() {
    // Simulate analysis
    document.getElementById('totalRecords').textContent = Math.floor(Math.random() * 1000) + 100;
    document.getElementById('avgValue').textContent = (Math.random() * 10).toFixed(2);
    document.getElementById('maxValue').textContent = (Math.random() * 10 + 8).toFixed(2);
    document.getElementById('minValue').textContent = (Math.random() * 3).toFixed(2);
    document.getElementById('trendUp').textContent = Math.floor(Math.random() * 40) + 30 + '%';
    document.getElementById('trendDown').textContent = Math.floor(Math.random() * 30) + 10 + '%';
    document.getElementById('trendStable').textContent = Math.floor(Math.random() * 30) + 40 + '%';
    document.getElementById('anomalies').textContent = Math.floor(Math.random() * 10);
    document.getElementById('missingData').textContent = Math.floor(Math.random() * 5);

    alert('Phân tích hoàn thành!');
}

function refreshData() {
    alert('Dữ liệu đã được làm mới!');
}

function saveReport() {
    const content = document.getElementById('reportContent').value;
    currentProject.reportContent = content;
    saveProjectToStorage();
    alert('Báo cáo đã được lưu!');
}

function exportToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(20);
    doc.text(currentProject.title, 20, 20);

    // Add project info
    doc.setFontSize(12);
    doc.text(`Mô tả: ${currentProject.description || 'Chưa có mô tả'}`, 20, 35);
    doc.text(`Danh mục: ${getCategoryName(currentProject.category)}`, 20, 45);
    doc.text(`Ngày tạo: ${formatDate(currentProject.createdAt)}`, 20, 55);

    // Add notes
    doc.text('Ghi chú:', 20, 70);
    let y = 80;
    const notes = currentProject.notes || [];
    notes.forEach(note => {
        doc.text(`- ${note.content}`, 25, y);
        y += 10;
    });

    // Add report content
    if (currentProject.reportContent) {
        doc.text('Nội dung báo cáo:', 20, y + 10);
        const lines = doc.splitTextToSize(currentProject.reportContent, 170);
        doc.text(lines, 20, y + 20);
    }

    doc.save(`${currentProject.title}.pdf`);
}

function exportToWord() {
    alert('Tính năng xuất Word đang được phát triển!');
}

function exportToExcel() {
    alert('Tính năng xuất Excel đang được phát triển!');
}

function shareProject() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        alert('Link dự án đã được copy vào clipboard!');
    });
}

// Utility functions
function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('vi-VN');
}

function formatDateTime(dateString) {
    return new Date(dateString).toLocaleString('vi-VN');
}

function getCategoryName(category) {
    const categories = {
        research: 'Nghiên cứu',
        analysis: 'Phân tích dữ liệu',
        survey: 'Khảo sát',
        report: 'Báo cáo',
        other: 'Khác'
    };
    return categories[category] || 'Khác';
}

// Initialize page
document.addEventListener('DOMContentLoaded', function () {
    loadProject();
});