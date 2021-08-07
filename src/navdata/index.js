export function dataInJs() {
    const menus = [
        { title: '仪表盘', icon: 'el-icon-s-grid' },
        {
            title: '个人中心',
            icon: 'el-icon-s-custom',
            subMenu: [
                { title: '个人信息', icon: 'el-icon-user-solid' },
                { title: '配置管理', icon: 'el-icon-s-operation' }
            ],
            down: 'el-icon-arrow-down',
            up: 'el-icon-arrow-up'
        },
        { title: '用户管理', icon: 'el-icon-s-opportunity' },
        {
            title: '文章管理',
            icon: 'el-icon-tickets',
            subMenu: [
                { title: '文章列表', icon: 'el-icon-document-copy' },
                { title: '编辑文章', icon: 'el-icon-edit-outline' },
                { title: '文章分类', icon: 'el-icon-folder' }
            ],
            down: 'el-icon-arrow-down',
            up: 'el-icon-arrow-up'
        },
        { title: '评论管理', icon: 'el-icon-chat-line-round' },
        { title: '示例页面', icon: 'el-icon-notebook-2' },
        {
            title: '小玩意',
            icon: 'el-icon-magic-stick',
            subMenu: [
                { title: '任务板', icon: 'el-icon-film' },
                { title: '卡片', icon: 'el-icon-collection-tag' },
                { title: '表单生成', icon: 'el-icon-files' }
            ],
            down: 'el-icon-arrow-down',
            up: 'el-icon-arrow-up'
        }
    ]
    return menus
}

// export default menus