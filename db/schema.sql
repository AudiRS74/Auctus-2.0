-- Instruments Table
CREATE TABLE instruments (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  symbol VARCHAR(20) NOT NULL,
  is_active BOOLEAN DEFAULT TRUE
);

-- Trades Table
CREATE TABLE trades (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  symbol VARCHAR(20) NOT NULL,
  type VARCHAR(10) NOT NULL,
  quantity INT NOT NULL,
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Strategies Table
CREATE TABLE strategies (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  name VARCHAR(50),
  config JSONB,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Broker API Keys
CREATE TABLE broker_keys (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  broker VARCHAR(32),
  api_key TEXT,
  api_secret TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);