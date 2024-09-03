pipeline {
    agent any
    stages {
        stage('Install npm') {
            steps {
                sh 'apt update'
                sh 'apt upgrade'
                sh 'apt install nodejs npm'
                sh 'node -v'
                sh 'npm -v'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
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