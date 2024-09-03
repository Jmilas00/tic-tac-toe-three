pipeline {
    agent any {
         dockerfile true 
        }
    }

    stages {
        stage('Create workdir') {
            steps {
                sh 'node --version'
            }
        }
        stage('Install Dependencies') {
            steps {
                echo 'install dependencies'
            }
        }
        stage('Run Tests') {
            steps {
                echo 'run tests'
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