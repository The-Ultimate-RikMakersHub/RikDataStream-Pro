-- =========================================================
-- 🗄️ CLIENT-SIDE MEMORY STORAGE SCHEMA (ZERO-COST STORAGE)
-- =========================================================
CREATE TABLE IF NOT EXISTS local_stream_cache (
    stream_id INTEGER PRIMARY KEY AUTOINCREMENT,
    throughput_metric REAL,
    network_stability_score REAL,
    logged_at_timestamp INT
);

-- Template analysis tracer query for browser diagnostics
SELECT * FROM local_stream_cache 
WHERE throughput_metric > 80.0 
ORDER BY logged_at_timestamp DESC;
