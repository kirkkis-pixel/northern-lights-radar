#!/bin/bash

# Northern Lights Radar - GitHub Setup Script
echo "🚀 Setting up Northern Lights Radar for GitHub deployment..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Not in a git repository. Please run 'git init' first."
    exit 1
fi

# Check if remote origin exists
if git remote get-url origin >/dev/null 2>&1; then
    echo "✅ Git remote origin already exists"
    echo "Current remote: $(git remote get-url origin)"
else
    echo "📝 Please create a new repository on GitHub first:"
    echo "   1. Go to https://github.com/new"
    echo "   2. Name it 'northern-lights-radar'"
    echo "   3. Make it public or private"
    echo "   4. Don't initialize with README (we already have files)"
    echo ""
    read -p "Enter your GitHub repository URL (e.g., https://github.com/username/northern-lights-radar.git): " REPO_URL
    
    if [ -n "$REPO_URL" ]; then
        git remote add origin "$REPO_URL"
        echo "✅ Added remote origin: $REPO_URL"
    else
        echo "❌ No repository URL provided. Exiting."
        exit 1
    fi
fi

# Push to GitHub
echo "📤 Pushing to GitHub..."
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🎉 Next steps:"
    echo "   1. Go to https://vercel.com/new"
    echo "   2. Import your GitHub repository"
    echo "   3. Add environment variables:"
    echo "      - OWM_API_KEY (get from openweathermap.org)"
    echo "      - NEXT_PUBLIC_SITE_URL (your production URL)"
    echo "   4. Click Deploy!"
    echo ""
    echo "📖 See DEPLOYMENT.md for detailed instructions"
else
    echo "❌ Failed to push to GitHub. Please check your repository URL and try again."
    exit 1
fi
