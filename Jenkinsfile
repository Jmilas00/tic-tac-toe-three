// pipeline {
//     agent {
//         docker {
//             image 'jenkins/inbound-agent:latest-jdk21'
//             args '-v /tmp:/tmp'
//         }
//     }
//     stages {
//         stage('Test') {
//             steps {
//                 sh 'node --version'
//                 echo 'lole'
//             }
//         }
//     }
// }
pipeline {
    agent any
    environment { 
        NO_COLOR = 'true'
        INITIAL_BRANCH = "${env.BRANCH_NAME}"
    }
    stages {
        stage('Checkout') {
            steps {
                script {
                    checkout([$class: 'GitSCM',
                              branches: [[name: '*/main']],
                              doGenerateSubmoduleConfigurations: false,
                              extensions: [[$class: 'CloneOption', depth: 0, noTags: false, reference: '', shallow: false]],
                              submoduleCfg: [],
                              userRemoteConfigs: [[url: 'https://gitea.josip-milas.buzz/ci/tic-tac-toe-three.git/']]
                    ])
                    def branchName = env.INITIAL_BRANCH
                    sh 'git fetch --all'
                    //sh 'git checkout ${branchName}'
                }
            }
        }
        stage('Name initial branch') {
            steps {
                echo "Initial branch: ${INITIAL_BRANCH}"
            }
        }
        stage('Run docker hello world') {
            when {
                anyOf {
                    branch 'feature/*'
                }
            }
            steps {
                sh 'whoami'
                sh 'sudo docker run hello-world'
                sh 'sudo docker ps'
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
            script {
                if (env.INITIAL_BRANCH == 'main') {
                    echo 'Success on main!'
                }
                else if (env.INITIAL_BRANCH == 'test') {
                    echo 'Tests passed, attempting to merge into release'
                        sh 'git branch -a'
                        sh 'git fetch origin'
                        sh 'git checkout release || git checkout -b release origin/release'
                        sh 'git merge test'
                        sh 'git push origin release'
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