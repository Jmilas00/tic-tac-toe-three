pipeline {
    agent any
    environment { 
        NO_COLOR = 'true'
    }
    stages {
        stage('Install npm') {
            when {
                anyOf {
                    branch 'feature/*'
                    branch 'test'
                }
            }
            steps {
                sh 'whoami'
                sh 'sudo apt-get update'
                sh 'sudo apt-get -y upgrade'
                sh 'sudo apt-get -y install nodejs npm'
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Install Dependencies') {
            when {
                branch 'test'
            }
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Tests') {
            when {
                branch 'test'
            }
            steps {
                sh 'npm run test'
                junit 'test-results.xml'
            }
        }
        stage('Deploy') {
            when {
                branch 'release'
            }
            steps {
                echo 'Deploying...'
            }
        }
    }
    post {
        always {
            
            echo 'Pipeline finished.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}