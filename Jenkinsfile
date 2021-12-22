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
  parameters {
    string defaultValue: 'latest', description: '本次编译的工程版本', name: 'version', trim: true
  }
  stages {
    stage('Build') {
      steps{
        sh "chmod +x ./build.sh && ./build.sh build"
      }
    }
    stage('Deploy') {
      steps{
        sh "chmod +x ./build.sh && ./build.sh deploy ${version}"
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
