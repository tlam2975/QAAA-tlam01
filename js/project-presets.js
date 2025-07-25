const templates = [
    {
        id: 'student-analytics',
        title: 'Phân tích dữ liệu sinh viên',
        subtitle: 'Phân tích xu hướng học tập và kết quả học tập',
        category: 'analysis',
        difficulty: 'easy',
        icon: 'fas fa-graduation-cap',
        description: 'Mẫu dự án giúp bạn phân tích dữ liệu sinh viên một cách toàn diện, từ điểm số, xu hướng học tập đến tỷ lệ đỗ/rớt.',
        features: [
            'Phân tích điểm số theo từng môn học',
            'Biểu đồ xu hướng theo thời gian',
            'So sánh kết quả giữa các khóa học',
            'Phát hiện các yếu tố ảnh hưởng đến kết quả học tập',
            'Báo cáo tự động với insights'
        ],
        stats: { charts: 8, insights: 15, duration: '2-3 tuần' },
        preview: {
            description: 'Dự án này sẽ giúp bạn hiểu sâu hơn về dữ liệu sinh viên NEU thông qua các phân tích chuyên sâu.',
            steps: [
                'Thu thập dữ liệu từ hệ thống NEU',
                'Làm sạch và chuẩn hóa dữ liệu',
                'Tạo các biểu đồ phân tích cơ bản',
                'Phân tích xu hướng và pattern',
                'Viết báo cáo và đưa ra recommendations'
            ],
            tools: ['Chart.js', 'Firebase Analytics', 'Excel Export', 'PDF Generator']
        }
    },
    {
        id: 'course-satisfaction',
        title: 'Khảo sát mức độ hài lòng môn học',
        subtitle: 'Thu thập và phân tích feedback từ sinh viên',
        category: 'survey',
        difficulty: 'medium',
        icon: 'fas fa-star',
        description: 'Tạo và quản lý khảo sát về chất lượng giảng dạy, nội dung môn học và mức độ hài lòng của sinh viên.',
        features: [
            'Form khảo sát tùy chỉnh',
            'Thu thập dữ liệu real-time',
            'Phân tích sentiment từ comments',
            'Dashboard theo dõi responses',
            'Báo cáo chi tiết cho giảng viên'
        ],
        stats: { charts: 6, insights: 12, duration: '1-2 tuần' },
        preview: {
            description: 'Hệ thống khảo sát hoàn chỉnh để đánh giá chất lượng giảng dạy và học tập tại NEU.',
            steps: [
                'Thiết kế câu hỏi khảo sát',
                'Tạo form online và thu thập dữ liệu',
                'Phân tích kết quả theo nhiều tiêu chí',
                'Tạo dashboard trực quan',
                'Đưa ra khuyến nghị cải thiện'
            ],
            tools: ['Google Forms API', 'Sentiment Analysis', 'Chart.js', 'Statistics Engine']
        }
    },
    {
        id: 'academic-research',
        title: 'Nghiên cứu học thuật',
        subtitle: 'Template cho các dự án nghiên cứu khoa học',
        category: 'research',
        difficulty: 'hard',
        icon: 'fas fa-microscope',
        description: 'Mẫu dự án nghiên cứu học thuật với cấu trúc chuẩn, hỗ trợ literature review, methodology và analysis.',
        features: [
            'Cấu trúc paper nghiên cứu chuẩn',
            'Quản lý tài liệu tham khảo',
            'Tools cho statistical analysis',
            'Template cho các loại biểu đồ khoa học',
            'Citation và bibliography tự động'
        ],
        stats: { charts: 12, insights: 25, duration: '4-6 tuần' },
        preview: {
            description: 'Framework hoàn chỉnh cho các dự án nghiên cứu học thuật từ ý tưởng đến xuất bản.',
            steps: [
                'Literature review và state of the art',
                'Xác định research questions',
                'Thu thập và phân tích dữ liệu',
                'Statistical testing và validation',
                'Viết paper và chuẩn bị xuất bản'
            ],
            tools: ['Statistical Package', 'Citation Manager', 'LaTeX Integration', 'Peer Review System']
        }
    },
    {
        id: 'financial-analysis',
        title: 'Phân tích tài chính giáo dục',
        subtitle: 'Phân tích chi phí và hiệu quả đầu tư giáo dục',
        category: 'analysis',
        difficulty: 'medium',
        icon: 'fas fa-chart-pie',
        description: 'Phân tích các khía cạnh tài chính của giáo dục, từ chi phí học tập đến ROI của các chương trình đào tạo.',
        features: [
            'Phân tích chi phí học tập',
            'So sánh ROI giữa các ngành',
            'Dự báo xu hướng học phí',
            'Phân tích nguồn funding',
            'Dashboard tài chính interactive'
        ],
        stats: { charts: 10, insights: 18, duration: '3-4 tuần' },
        preview: {
            description: 'Công cụ phân tích tài chính chuyên biệt cho lĩnh vực giáo dục và đào tạo.',
            steps: [
                'Thu thập dữ liệu tài chính',
                'Phân tích chi phí - lợi ích',
                'Tạo mô hình dự báo',
                'Đánh giá hiệu quả đầu tư',
                'Báo cáo và khuyến nghị'
            ],
            tools: ['Financial Models', 'Forecasting Engine', 'ROI Calculator', 'Excel Integration']
        }
    },
    {
        id: 'library-usage',
        title: 'Phân tích sử dụng thư viện',
        subtitle: 'Theo dõi và tối ưu hóa việc sử dụng thư viện',
        category: 'analysis',
        difficulty: 'easy',
        icon: 'fas fa-book-open',
        description: 'Phân tích patterns sử dụng thư viện, tài liệu phổ biến và tối ưu hóa dịch vụ thư viện.',
        features: [
            'Tracking sách được mượn nhiều nhất',
            'Phân tích thời gian peak hours',
            'Heat map sử dụng không gian',
            'Recommendations cho acquisition',
            'Student behavior analysis'
        ],
        stats: { charts: 7, insights: 14, duration: '1-2 tuần' },
        preview: {
            description: 'Hệ thống analytics cho thư viện với insights về behavior patterns và usage optimization.',
            steps: [
                'Connect với library management system',
                'Track usage patterns',
                'Analyze peak times và popular resources',
                'Generate optimization recommendations',
                'Create executive dashboard'
            ],
            tools: ['Library API', 'Heatmap Generator', 'Recommendation Engine', 'Usage Analytics']
        }
    },
    {
        id: 'career-tracking',
        title: 'Theo dõi sự nghiệp sinh viên',
        subtitle: 'Phân tích hành trình nghề nghiệp sau tốt nghiệp',
        category: 'research',
        difficulty: 'medium',
        icon: 'fas fa-briefcase',
        description: 'Nghiên cứu và theo dõi sự phát triển nghề nghiệp của sinh viên sau khi tốt nghiệp từ NEU.',
        features: [
            'Survey alumni career paths',
            'Salary progression analysis',
            'Industry distribution tracking',
            'Skills gap identification',
            'University program effectiveness'
        ],
        stats: { charts: 9, insights: 20, duration: '3-5 tuần' },
        preview: {
            description: 'Comprehensive alumni tracking system để đánh giá effectiveness của các chương trình đào tạo.',
            steps: [
                'Design alumni survey',
                'Collect career progression data',
                'Analyze industry trends',
                'Identify success factors',
                'Create actionable insights cho curriculum'
            ],
            tools: ['Alumni Database', 'LinkedIn API', 'Industry Analytics', 'Career Mapping']
        }
    }
];

let currentCategory = 'all';

function displayTemplates(category = 'all') {
    const grid = document.getElementById('templatesGrid');
    const filteredTemplates = category === 'all'
        ? templates
        : templates.filter(t => t.category === category);

    grid.innerHTML = filteredTemplates.map(template => `
                <div class="template-card" data-category="${template.category}">
                    <div class="template-header">
                        <div class="template-icon">
                            <i class="${template.icon}"></i>
                        </div>
                        <div class="template-title">${template.title}</div>
                        <div class="template-subtitle">${template.subtitle}</div>
                    </div>
                    <div class="template-body">
                        <div class="difficulty-badge difficulty-${template.difficulty}">
                            ${getDifficultyText(template.difficulty)}
                        </div>
                        <div class="template-description">${template.description}</div>
                        
                        <ul class="template-features">
                            ${template.features.map(feature => `
                                <li><i class="fas fa-check"></i> ${feature}</li>
                            `).join('')}
                        </ul>

                        <div class="template-stats">
                            <div class="stat">
                                <div class="stat-number">${template.stats.charts}</div>
                                <div class="stat-label">Biểu đồ</div>
                            </div>
                            <div class="stat">
                                <div class="stat-number">${template.stats.insights}</div>
                                <div class="stat-label">Insights</div>
                            </div>
                            <div class="stat">
                                <div class="stat-number">${template.stats.duration}</div>
                                <div class="stat-label">Thời gian</div>
                            </div>
                        </div>

                        <div class="template-actions">
                            <button class="btn btn-secondary btn-small" onclick="previewTemplate('${template.id}')">
                                <i class="fas fa-eye"></i>
                                Xem trước
                            </button>
                            <button class="btn btn-primary btn-small" onclick="useTemplate('${template.id}')">
                                <i class="fas fa-rocket"></i>
                                Sử dụng mẫu
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
}

function getDifficultyText(difficulty) {
    const levels = {
        easy: 'Dễ',
        medium: 'Trung bình',
        hard: 'Khó'
    };
    return levels[difficulty] || 'Không xác định';
}

function previewTemplate(templateId) {
    const template = templates.find(t => t.id === templateId);
    if (!template) return;

    document.getElementById('previewTitle').innerHTML = `
                <i class="${template.icon}"></i>
                ${template.title}
            `;

    document.getElementById('previewBody').innerHTML = `
                <div class="preview-section">
                    <h4><i class="fas fa-info-circle"></i> Mô tả chi tiết</h4>
                    <p>${template.preview.description}</p>
                </div>

                <div class="preview-section">
                    <h4><i class="fas fa-list-ol"></i> Các bước thực hiện</h4>
                    <ol>
                        ${template.preview.steps.map(step => `<li>${step}</li>`).join('')}
                    </ol>
                </div>

                <div class="preview-section">
                    <h4><i class="fas fa-tools"></i> Công cụ được sử dụng</h4>
                    <div class="tools-grid">
                        ${template.preview.tools.map(tool => `
                            <span class="tool-badge">${tool}</span>
                        `).join('')}
                    </div>
                </div>

                <div class="preview-section">
                    <h4><i class="fas fa-chart-bar"></i> Kết quả mong đợi</h4>
                    <div class="grid grid-3">
                        <div class="stat-card">
                            <i class="fas fa-chart-pie"></i>
                            <h5>${template.stats.charts} Biểu đồ</h5>
                            <p>Visualization đa dạng</p>
                        </div>
                        <div class="stat-card">
                            <i class="fas fa-lightbulb"></i>
                            <h5>${template.stats.insights} Insights</h5>
                            <p>Phát hiện quan trọng</p>
                        </div>
                        <div class="stat-card">
                            <i class="fas fa-clock"></i>
                            <h5>${template.stats.duration}</h5>
                            <p>Thời gian hoàn thành</p>
                        </div>
                    </div>
                </div>

                <div class="preview-actions">
                    <button class="btn btn-secondary" onclick="closePreview()">
                        <i class="fas fa-times"></i>
                        Đóng
                    </button>
                    <button class="btn btn-primary" onclick="useTemplate('${template.id}')">
                        <i class="fas fa-rocket"></i>
                        Sử dụng mẫu này
                    </button>
                </div>

                <style>
                    .preview-section {
                        margin-bottom: 2rem;
                        padding-bottom: 1.5rem;
                        border-bottom: 1px solid #e0e0e0;
                    }
                    .preview-section:last-child {
                        border-bottom: none;
                    }
                    .preview-section h4 {
                        color: #333;
                        margin-bottom: 1rem;
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                    }
                    .tools-grid {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 0.5rem;
                    }
                    .tool-badge {
                        background: #f0f0f0;
                        padding: 0.5rem 1rem;
                        border-radius: 20px;
                        font-size: 0.9rem;
                        color: #555;
                    }
                    .stat-card {
                        text-align: center;
                        padding: 1.5rem;
                        background: #f8f9fa;
                        border-radius: 8px;
                    }
                    .stat-card i {
                        font-size: 2rem;
                        color: #667eea;
                        margin-bottom: 1rem;
                    }
                    .stat-card h5 {
                        margin-bottom: 0.5rem;
                        color: #333;
                    }
                    .stat-card p {
                        color: #666;
                        font-size: 0.9rem;
                        margin-bottom: 0;
                    }
                    .preview-actions {
                        display: flex;
                        gap: 1rem;
                        justify-content: center;
                        margin-top: 2rem;
                        padding-top: 2rem;
                        border-top: 2px solid #f0f0f0;
                    }
                </style>
            `;

    document.getElementById('previewModal').style.display = 'block';
}

function closePreview() {
    document.getElementById('previewModal').style.display = 'none';
}

function useTemplate(templateId) {
    const template = templates.find(t => t.id === templateId);
    if (!template) return;

    // Create project from template
    const projects = JSON.parse(localStorage.getItem('neuProjects')) || [];
    const newProject = {
        id: 'proj_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now(),
        title: template.title,
        description: template.description,
        category: template.category,
        template: templateId,
        status: 'draft',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        data: [],
        notes: [{
            id: 'note_' + Date.now(),
            content: `Dự án được tạo từ mẫu: ${template.title}. Các bước thực hiện: ${template.preview.steps.join(', ')}`,
            createdAt: new Date().toISOString()
        }],
        charts: [],
        reportContent: `# ${template.title}\n\n${template.description}\n\n## Mục tiêu\n\n${template.preview.description}\n\n## Phương pháp\n\n${template.preview.steps.map((step, i) => `${i + 1}. ${step}`).join('\n')}\n\n## Công cụ sử dụng\n\n${template.preview.tools.map(tool => `- ${tool}`).join('\n')}`
    };

    projects.push(newProject);
    localStorage.setItem('neuProjects', JSON.stringify(projects));

    alert(`Dự án "${template.title}" đã được tạo thành công!`);

    // Close preview modal if open
    closePreview();

    // Redirect to project workspace
    localStorage.setItem('currentProjectId', newProject.id);
    window.location.href = 'project-workspace.html';
}

function createCustomProject() {
    window.location.href = 'UI.html';
}

// Category filtering
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const category = this.dataset.category;
        currentCategory = category;
        displayTemplates(category);
    });
});

// Close modal when clicking outside
window.onclick = function (event) {
    const modal = document.getElementById('previewModal');
    if (event.target === modal) {
        closePreview();
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    displayTemplates();
});