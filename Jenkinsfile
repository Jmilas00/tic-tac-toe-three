pipeline {
    agent any
    stages {
        stage('Install npm') {
            steps {
                sh 'whoami'
                sh 'apt-get install sudo'
                sh 'sudo apt-get update'
                sh 'sudo apt-get upgrade'
                sh 'sudo apt-get install nodejs npm'
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