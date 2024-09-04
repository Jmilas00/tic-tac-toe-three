pipeline {
    agent any
    environment { 
        NO_COLOR = 'true'
        INITIAL_BRANCH = "${env.BRANCH_NAME}"
    }
    stages {
        stage('Name initial branch') {
            steps {
                echo "Initial branch: ${INITIAL_BRANCH}"
            }
        }
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
        success {
            if (env.INITIAL_BRANCH == 'main') {
                echo 'Success on main!'
            }
            else if (env.INITIAL_BRANCH == 'test') {
                echo 'Tests passed, attempting to merge into release'
                script {
                    sh 'git checkout release'
                    sh 'git merge test'
                    sh 'git push origin release'
                }
            }
            else {
                echo 'Success!'
            }
        }
        failure {
            echo 'Pipeline failed.'
        }
        always {
            echo 'Pipeline finished.'
        }
    }
}