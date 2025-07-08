// Dữ liệu mẫu cho các dự án
let projects = JSON.parse(localStorage.getItem('neuProjects')) || [];

// Hiển thị danh sách dự án
function displayProjects() {
    const container = document.getElementById('projectsContainer');
    const countElement = document.getElementById('projectCount');

    if (projects.length === 0) {
        container.innerHTML = `
                    <div class="empty-state">
                        <i class="fas fa-folder-open"></i>
                        <h4>Chưa có dự án nào</h4>
                        <p>Hãy bắt đầu bằng cách tạo dự án đầu tiên của bạn</p>
                    </div>
                `;
        countElement.textContent = '0 dự án';
        return;
    }

    countElement.textContent = `${projects.length} dự án`;

    const projectsHTML = projects.map(project => `
                <div class="project-card">
                    <div class="project-header">
                        <div>
                            <div class="project-title">${project.title}</div>
                            <div class="project-status ${project.status === 'active' ? 'status-active' : 'status-draft'}">
                                ${project.status === 'active' ? 'Đang thực hiện' : 'Bản nháp'}
                            </div>
                        </div>
                    </div>
                    <div class="project-description">${project.description || 'Chưa có mô tả'}</div>
                    <div class="project-stats">
                        <span><i class="fas fa-calendar"></i> ${formatDate(project.createdAt)}</span>
                        <span><i class="fas fa-tag"></i> ${getCategoryName(project.category)}</span>
                    </div>
                    <div class="project-actions">
                        <button class="btn btn-primary btn-small" onclick="openProject('${project.id}')">
                            <i class="fas fa-folder-open"></i> Mở
                        </button>
                        <button class="btn btn-secondary btn-small" onclick="deleteProject('${project.id}')">
                            <i class="fas fa-trash"></i> Xóa
                        </button>
                    </div>
                </div>
            `).join('');

    container.innerHTML = `<div class="projects-grid">${projectsHTML}</div>`;
}

// Mở modal tạo dự án
function openCreateModal() {
    document.getElementById('createProjectModal').style.display = 'block';
}

// Đóng modal tạo dự án
function closeCreateModal() {
    document.getElementById('createProjectModal').style.display = 'none';
    document.getElementById('createProjectForm').reset();
}

// Xử lý form tạo dự án
document.getElementById('createProjectForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const project = {
        id: generateId(),
        title: formData.get('title'),
        description: formData.get('description'),
        category: formData.get('category'),
        template: formData.get('template'),
        status: 'draft',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        data: [],
        notes: [],
        charts: []
    };

    projects.push(project);
    localStorage.setItem('neuProjects', JSON.stringify(projects));

    closeCreateModal();
    displayProjects();

    // Chuyển đến trang dự án mới
    setTimeout(() => {
        openProject(project.id);
    }, 500);
});

// Mở dự án
function openProject(projectId) {
    localStorage.setItem('currentProjectId', projectId);
    window.location.href = 'projects.html';
}

// Xóa dự án
function deleteProject(projectId) {
    if (confirm('Bạn có chắc chắn muốn xóa dự án này?')) {
        projects = projects.filter(p => p.id !== projectId);
        localStorage.setItem('neuProjects', JSON.stringify(projects));
        displayProjects();
    }
}        // Hiển thị mẫu dự án
function showTemplates() {
    window.location.href = 'project-templates.html';
}

// Utility functions
function generateId() {
    return 'proj_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('vi-VN');
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

// Đóng modal khi click bên ngoài
window.onclick = function (event) {
    const modal = document.getElementById('createProjectModal');
    if (event.target === modal) {
        closeCreateModal();
    }
}

// Khởi tạo trang
document.addEventListener('DOMContentLoaded', function () {
    displayProjects();

    // Tạo dữ liệu mẫu nếu chưa có
    if (projects.length === 0) {
        const sampleProjects = [
            {
                id: 'sample_1',
                title: 'Phân tích điểm số sinh viên khóa 2023',
                description: 'Nghiên cứu xu hướng điểm số và tỷ lệ đỗ/rớt của sinh viên NEU',
                category: 'analysis',
                template: 'data-analysis',
                status: 'active',
                createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
                updatedAt: new Date().toISOString(),
                data: [],
                notes: [],
                charts: []
            },
            {
                id: 'sample_2',
                title: 'Khảo sát mức độ hài lòng về dịch vụ thư viện',
                description: 'Thu thập ý kiến sinh viên về chất lượng dịch vụ thư viện trường',
                category: 'survey',
                template: 'course-survey',
                status: 'draft',
                createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
                updatedAt: new Date().toISOString(),
                data: [],
                notes: [],
                charts: []
            }
        ];

        projects = sampleProjects;
        localStorage.setItem('neuProjects', JSON.stringify(projects));
        displayProjects();
    }
});