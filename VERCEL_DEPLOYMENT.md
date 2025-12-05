# Vercel Deployment Guide - Lead Form

## Environment Variables Setup

For the lead form to work on Vercel, you need to set the following environment variables:

### Required Variables

1. **MONGODB_URI**
   - Format: `mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority`
   - Example: `mongodb+srv://user:password@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`
   - **Important**: Make sure there are no spaces or extra characters

2. **MONGODB_DB** (Optional)
   - Default: `drivingschool_leads`
   - The database name where leads will be stored

### How to Set Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable:
   - **Name**: `MONGODB_URI`
   - **Value**: Your MongoDB connection string
   - **Environment**: Select all (Production, Preview, Development)
4. Click **Save**
5. **IMPORTANT**: Redeploy your application after adding/updating environment variables

### Common Issues and Solutions

#### 1. "MONGODB_URI mangler i miljøvariablene"
- **Cause**: Environment variable not set or not accessible
- **Solution**: 
  - Verify the variable is set in Vercel dashboard
  - Make sure it's set for the correct environment (Production/Preview)
  - Redeploy after setting the variable

#### 2. "Database autentisering feilet"
- **Cause**: Wrong username/password in connection string
- **Solution**:
  - Double-check your MongoDB Atlas username and password
  - Make sure special characters in password are URL-encoded (e.g., `@` becomes `%40`)
  - Verify the user has proper database access permissions

#### 3. Connection Timeout
- **Cause**: MongoDB Atlas IP whitelist blocking Vercel
- **Solution**:
  - Go to MongoDB Atlas → Network Access
  - Add `0.0.0.0/0` to allow all IPs (for development)
  - Or add specific Vercel IP ranges (check Vercel docs for current IPs)

#### 4. Works on Localhost but Not on Vercel
- **Possible causes**:
  - Environment variables not set in Vercel
  - Need to redeploy after setting variables
  - Different connection string format needed
  - MongoDB Atlas network restrictions

#### 5. Testing the API

You can test if the API is working by:

1. **GET Request** (should return status):
   ```bash
   curl https://your-domain.vercel.app/api/leads
   ```
   Should return: `{"status":"ok","message":"API kjører"}`

2. **Check Vercel Logs**:
   - Go to Vercel Dashboard → Your Project → **Deployments** → Click on latest deployment → **Functions** tab
   - Look for any error messages in the logs

3. **Check MongoDB Atlas**:
   - Go to MongoDB Atlas → Collections
   - Verify that leads are being saved (if API is working)

### MongoDB Atlas Setup Checklist

- [ ] MongoDB Atlas cluster created
- [ ] Database user created with read/write permissions
- [ ] Network Access configured (allow Vercel IPs or `0.0.0.0/0`)
- [ ] Connection string copied correctly
- [ ] Environment variable set in Vercel
- [ ] Application redeployed after setting environment variable
- [ ] Tested with GET request to `/api/leads`

### Debugging Steps

1. **Verify Environment Variables**:
   - Check Vercel dashboard that variables are set
   - Make sure they're set for Production environment

2. **Check Vercel Function Logs**:
   - Go to Vercel Dashboard → Deployments → Latest → Functions
   - Look for error messages

3. **Test API Endpoint**:
   - Try the GET endpoint: `https://your-domain.vercel.app/api/leads`
   - Should return `{"status":"ok","message":"API kjører"}`

4. **Check MongoDB Connection**:
   - Verify connection string format
   - Test connection from MongoDB Atlas dashboard
   - Check network access settings

5. **Redeploy**:
   - After any environment variable changes, always redeploy
   - Vercel → Deployments → Click "..." → Redeploy

### Connection String Format

Make sure your `MONGODB_URI` follows this format:

```
mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority
```

**Important Notes**:
- Replace `<username>` and `<password>` with your actual credentials
- Replace `<cluster>` with your cluster name
- If password contains special characters, URL-encode them:
  - `@` → `%40`
  - `#` → `%23`
  - `%` → `%25`
  - `&` → `%26`
  - `+` → `%2B`
  - `=` → `%3D`

### Example

If your username is `admin` and password is `P@ssw0rd#123`, the connection string would be:

```
mongodb+srv://admin:P%40ssw0rd%23123@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```





