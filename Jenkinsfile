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
        stage('Run docker hello world') {
            when {
                anyOf {
                    branch 'feature/*'
                    branch 'test'
                }
            }
            steps {
                sh 'whoami'
                sh 'sudo docker run hello-world'
                sh 'sudo docker ps'
            }
        }
        stage('Build Docker Image') {
            when {
                branch 'test'
            }
            steps {
                sh 'sudo docker build -t test-container-tictactoe -f Dockerfile.test .'
            }
        }
        stage('Run Tests in Docker') {
            when {
                branch 'test'
            }
            steps {
                sh 'sudo docker run --rm -v ${WORKSPACE}/test-results:/TicTacToeThreeFile/test-results test-container-tictactoe'
            }
        }
        stage('Publish Test Results') {
            when {
                branch 'test'
            }
            steps {
                sh 'ls'
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
            script {
                if (env.INITIAL_BRANCH == 'main') {
                    echo 'Success on main!'
                }
                else if (env.INITIAL_BRANCH == 'test') {
                    script {
                    checkout([$class: 'GitSCM',
                              branches: [[name: '*/main']],
                              doGenerateSubmoduleConfigurations: false,
                              extensions: [[$class: 'CloneOption', depth: 0, noTags: false, reference: '', shallow: false]],
                              submoduleCfg: [],
                              userRemoteConfigs: [[url: 'https://gitea.josip-milas.buzz/ci/tic-tac-toe-three.git/']]
                    ])
                    sh 'git fetch --all'
                    }
                    echo 'Tests passed, attempting to merge into release'
                        sh 'git branch -a'
                        sh 'git fetch origin'
                        sh 'git checkout release || git checkout -b release origin/release'
                        sh 'git fetch origin test:test'
                        sh 'git merge test'
                        withCredentials([usernamePassword(credentialsId: 'GiteaJosipAdmin', usernameVariable: 'GIT_USERNAME', passwordVariable: 'GIT_PASSWORD')]) {
                            sh 'git push https://$GIT_USERNAME:$GIT_PASSWORD@gitea.josip-milas.buzz/ci/tic-tac-toe-three.git release'
                        }
                    }
                else {
                    echo 'Success!'
                }
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