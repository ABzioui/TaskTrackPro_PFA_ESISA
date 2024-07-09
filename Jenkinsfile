pipeline {
    agent {
        docker {
            image 'node:current-alpine'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
    environment {
        NODE_ENV = 'production'
        REACT_APP_BASE_URL = 'http://localhost:5001'
        PORT = '5001'
        MONGO_URI = 'mongodb+srv://anas:tSUrDdvOGGhzKE2J@cluster0.tpi9ehl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        JWT_SECRET = 'StringHardToGuessForSecurity'
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/your-repo/your-project.git'
            }
        }
        stage('Build and Deploy') {
            steps {
                script {
                    // Remplacer les placeholders dans docker-compose.yml par des valeurs réelles
                    sh 'sed -i "s/${BUILD_ID}/${env.BUILD_ID}/g" docker-compose.yml'
                    
                    // Construire et déployer les images
                    sh 'docker-compose -f docker-compose.yml build'
                    sh 'docker-compose -f docker-compose.yml up -d'
                }
            }
        }
    }
    post {
        always {
            script {
                // Arrêter et supprimer les conteneurs
                sh 'docker-compose -f docker-compose.yml down'
                
                // Nettoyer les images Docker inutilisées
                sh 'docker image prune -f'
            }
        }
    }
}
