// 🚀 RIKMAKERSHUB HIGH-PERFORMANCE STATIC CALCULATIONS
#include <iostream>

class TelemetryMath {
public:
    double calculateBandwidthEfficiency(double activeBytes, double droppedBytes) {
        if (activeBytes <= 0.0) return 0.0;
        return ((activeBytes - droppedBytes) / activeBytes) * 100.0;
    }
};
