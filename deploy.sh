echo "Switching to branch, master"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -i ~/.ssh/sammypham.pem -r build* ubuntu@3.129.202.146:/var/www/sammypham.com

echo "Done!"