#!/usr/bin/env groovy
pipeline {
  agent any
  // 设置环境变量
//   environment {
//     http_proxy=$http_proxy
//   }
  //默认命令运行的pwd 为项目workspace
  tools {
    nodejs 'node_js'
  }
  stages {
    stage('Build') {
      steps{
        echo '='*50 + '更新依赖包' + '='*50
        sh 'yarn config list'
        sh 'yarn config set registry https://registry.npm.taobao.org'
        sh 'yarn install'
        echo '='*50 + '开始构建' + '='*50
        sh 'yarn build:prod'
        echo 'build success!'
      }
    }
    stage('Deploy') {
      steps{
        echo '='*50 + '开始部署' + '='*50
        sh 'docker build -t leiax00/universe-view:latest .'
        sh "docker rm \$(docker ps -a |grep universe-view |awk '{print \$1}') -f"
        sh 'docker run -p 80:80 -d leiax00/universe-view'
      }
    }
  }
  post {
    failure {
      script{
//         emailext attachLog: true,
//         // 邮件模板这里的引号一定要注意写对（坑）
//         body: '''${SCRIPT, template="groovy-html.template"}''',
//         mimeType: 'text/html',
//         charset:'UTF-8',
//         // PlatformGroup #10 构建失败
//         subject: "${currentBuild.fullDisplayName} 构建失败",
//         //用逗号或空格分隔多个邮箱
//         to: 'xxx@xx.com xxxx@xxx.com'
          echo "CI failure...."
        }
    }
    success {
      script {
        echo 'CI END!!'
      }
    }
  }
}
