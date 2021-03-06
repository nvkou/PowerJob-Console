import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
const cn = {
    message: {

        // common
        'save': '保存',
        'cancel': '取消',
        'refresh': '刷新',
        'query': '查询',
        'reset': '重置',
        'keyword': '关键字',
        'run': '运行',
        'edit': '编辑',
        'delete': '删除',
        'success': '成功',
        'failed': '失败',
        'detail': '详情',
        'download': '下载',
        'stop': '停止',
        'back': '返回',
        'all': '全部',
        'more': '| 更多',

        // 欢迎界面
        'appRegister': '执行应用注册',
        'userRegister': '报警用户录入',
        'appNameInputPLH': '请输入应用名称',
        'appName': '应用名称',
        'appPassword': '密码',
        'register': '注册',
        'name': '姓名',
        'phone': '手机号',
        'email': '邮箱地址',
        'welcomeTitle': '欢迎使用 PowerJob!',
        'login': '登陆',
        'logout': '退出',
        'changeAppInfo': '修改应用信息',
        'newPassword': '新密码',
        'newPassword2': '确认密码',
        'stayLogged': '保持登录状态',


        // 左侧tab栏
        'tabHome': '系统首页',
        'tabJobManage': '任务管理',
        'tabJobInstance': '任务实例',
        'tabWorkflowManage': '工作流管理',
        'tabWfInstance': '工作流实例',
        'tabContainerOps': '容器',
        'tabTemplate': '模版生成',
        'tabContainerManager': '容器运维',

        // 系统首页
        'omsServerTime': '调度服务器时间',
        'omsServerTimezone': '调度服务器时区',
        'localBrowserTime': '本地时间',
        'localBrowserTimezone': '本地时区',
        'githubURL': '项目地址',
        'docURL': '文档地址',
        'totalJobNum': '任务总数',
        'runningInstanceNum': '当前运行实例数',
        'recentFailedInstanceNum': '近期失败任务数',
        'workerNum': '集群机器数',
        'workerAddress': '机器地址',
        'cpuLoad': 'CPU 占用',
        'memoryLoad': '内存占用',
        'diskLoad': '磁盘占用',

        // 任务管理
        'jobId': '任务ID',
        'instanceId': '任务实例ID',
        'jobName': '任务名称',
        'scheduleInfo': '定时信息',
        'executeType': '执行类型',
        'processorType': '处理器类型',
        'status': '状态',
        'operation': '操作',
        'newJob': '新建任务',
        'jobDescription': '任务描述',
        'jobParams': '任务参数',
        'timeExpressionType': '时间表达式类型',
        'timeExpressionPlaceHolder': 'CRON填写CRON表达式，秒级任务填写整数，API无需填写',
        'executeConfig': '执行配置',
        'javaProcessorInfoPLH': '全限定类名，eg：com.github.kfcfans.DemoProcessor',
        'containerProcessorInfoPLH': '容器ID#全限定类名，eg：1#com.github.kfcfans.DemoProcessor',
        'shellProcessorInfoPLH': 'SHELL脚本文件内容',
        'pythonProcessorInfoPLH': 'Python脚本文件内容',
        'runtimeConfig': '运行时配置',
        'maxInstanceNum': '最大实例数',
        'threadConcurrency': '单机线程并发度',
        'timeout': '运行时间限制（毫秒）',
        'retryConfig': '重试配置',
        'taskRetryTimes': 'Instance重试次数',
        'subTaskRetryTimes': "Task重试次数",
        'workerConfig': '机器配置',
        'minCPU': '最低CPU核心数',
        'minMemory': '最低内存(GB)',
        'minDisk': '最低磁盘空间(GB)',
        'clusterConfig': '集群配置',
        'designatedWorkerAddress': '执行机器地址',
        'designatedWorkerAddressPLH': '执行机器地址（可选，不指定代表全部；多值英文逗号分割）',
        'maxWorkerNum': '最大执行机器数量',
        'maxWorkerNumPLH': '最大执行机器数量（0代表不限）',
        'alarmConfig': '报警配置',
        'alarmSelectorPLH': '选择报警通知人员',
        'standalone': '单机执行',
        'broadcast': '广播执行',
        'map': 'Map执行',
        'mapReduce': 'MapReduce执行',
        'fixRate': '固定频率（毫秒）',
        'fixDelay': '固定延迟（毫秒）',
        'workflow': '工作流',
        'onlineCronTool': '在线生成工具',
        'javaContainer': 'Java（容器）',
        'runHistory': '运行记录',
        'reRun': '重跑',

        // 任务实例管理
        'wfInstanceId': '工作流实例ID',
        'normalInstance': '普通任务实例',
        'wfInstance': '工作流任务实例',
        'triggerTime': '触发时间',
        'finishedTime': '结束时间',
        'log': '日志',
        'runningTimes': '运行次数',
        'taskTrackerAddress': 'TaskTracker 地址',
        'startTime': '开始时间',
        'expectedTriggerTime': '预计执行时间',
        'result': '任务结果',
        'subTaskInfo': 'Task 信息',
        'secondlyJobHistory': '最近 10 条秒级任务历史记录（秒级任务专用）',
        'subInstanceId': '子任务实例ID',

        // 工作流管理
        'wfId': '工作流ID',
        'wfName': '工作流名称',
        'newWorkflow': '新建工作流',
        'wfDescription': '工作流描述',
        'importJob': '导入任务',
        'deleteJob': '删除任务',
        'newStartPoint': '新增起点',
        'newEndPoint': '新增终点',
        'deleteEdge': '删除边',
        'importJobTitle': "请选择需要导入工作流的任务",
        'wfTimeExpressionPLH': 'CRON填写CRON表达式，API无需填写',
        'import': '导入',
        'ntfClickNeedDeleteNode': '请点击需要删除的节点',
        'ntfClickStartPoint': '请点击起始节点',
        'ntfClickTargetPoint': '请点击目标节点',
        'ntfClickDeleteEdge': '请点击需要删除的边',
        'ntfAddStartPointFirst': '请先添加起点!',
        'ntfInvalidEdge': '非法操作（起点终点相同）！',

        // 工作流实例
        'wfTips': 'tips：点击节点可查看任务实例详情',
        'ntfClickWaitingNode': '等待上游任务中...未生成任务实例，无法查看详情！',

        // 容器
        'newContainer': '新增容器',
        'containerType': '容器类型',
        'containerGitURL': 'Git仓库地址',
        'branchName': '分支名称',
        'username': '用户名',
        'password': '密码',
        'containerId': '容器ID',
        'containerName': '容器名称',
        'containerVersion': '容器版本',
        'deployTime': '部署时间',
        'deploy': '部署',
        'deployedWorkerList': '机器列表',
        'uploadTips': '拖拽或点击文件后会自动上传',

        // 任务实例状态
        'waitingDispatch': '等待派发',
        'waitingWorkerReceive': '等待Worker接收',
        'running': '运行中',
        'stopped': '手动停止',
        'canceled': '手动取消',
        'wfWaiting': '等待调度',
        'waitingUpstream': '等待上游节点'

    },
    ...zhLocale
};

export default cn
