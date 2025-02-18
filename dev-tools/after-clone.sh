#!/

echo "---### npm install --save ###---"
npm install --save

if [ ! -d venv ]; then
    echo "---### python3 -m venv venv ###---"
    python3 -m venv venv
fi

echo "---### source venv/bin/activate ###---"
source venv/bin/activate


