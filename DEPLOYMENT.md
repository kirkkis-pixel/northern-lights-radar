# Northern Lights Radar - Deployment Guide

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended)

1. **Push to GitHub**:
   ```bash
   # Create a new repository on GitHub, then:
   git remote add origin https://github.com/YOUR_USERNAME/northern-lights-radar.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Add environment variables (see below)
   - Click "Deploy"

### Option 2: Netlify

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Add environment variables
   - Click "Deploy site"

### Option 3: Railway

1. **Push to GitHub** (same as above)

2. **Deploy to Railway**:
   - Go to [railway.app](https://railway.app)
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository
   - Railway will auto-detect Next.js
   - Add environment variables
   - Deploy

## 🔧 Environment Variables

Add these environment variables in your deployment platform:

### Required
- `OWM_API_KEY` - OpenWeather API key (free from openweathermap.org)

### Optional
- `NEXT_PUBLIC_SITE_URL` - Your production URL (e.g., https://your-domain.com)
- `NEXT_PUBLIC_ENABLE_ADSENSE` - Set to "true" to enable ads
- `NEXT_PUBLIC_ADSENSE_CLIENT_ID` - Your AdSense client ID

## 📋 Pre-Deployment Checklist

- [ ] All files committed to Git
- [ ] Repository pushed to GitHub
- [ ] Environment variables configured
- [ ] Build tested locally (`npm run build`)
- [ ] Domain configured (if using custom domain)

## 🌐 Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed
4. Update `NEXT_PUBLIC_SITE_URL` environment variable

### Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS
4. Update environment variables

## 🔄 Continuous Deployment

Once set up, your site will automatically redeploy when you push changes to the main branch.

## 📊 Monitoring

- **Vercel**: Built-in analytics and monitoring
- **Netlify**: Built-in analytics
- **Railway**: Built-in monitoring and logs

## 🛠 Troubleshooting

### Build Failures
- Check environment variables are set correctly
- Ensure all dependencies are in package.json
- Check build logs for specific errors

### API Issues
- Verify API keys are correct
- Check rate limits on external APIs
- Monitor API endpoint responses

### Performance
- Enable Vercel Analytics for performance insights
- Use Lighthouse to audit performance
- Monitor Core Web Vitals

## 📱 Mobile Testing

Test your deployed site on:
- Mobile devices
- Different screen sizes
- Various browsers
- Slow network connections

## 🔒 Security

- Keep API keys secure
- Use environment variables for sensitive data
- Enable HTTPS (automatic on most platforms)
- Regular dependency updates

## 📈 SEO Optimization

Your site includes:
- ✅ Meta tags and Open Graph
- ✅ JSON-LD structured data
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Canonical URLs

## 🎯 Performance Targets

- **Lighthouse Score**: 90+ across all categories
- **First Contentful Paint**: < 2.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 📞 Support

If you encounter issues:
1. Check the deployment platform's documentation
2. Review build logs
3. Test locally first
4. Check environment variables
5. Verify API endpoints are working


