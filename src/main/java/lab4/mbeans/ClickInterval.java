package lab4.mbeans;

public class ClickInterval implements ClickIntervalMBean {
    private long lastClickTime = -1;
    private long totalInterval = 0;
    private int clickCount = 0;

    public synchronized void registerClick() {
        long now = System.currentTimeMillis();
        if (lastClickTime != -1) {
            totalInterval += (now - lastClickTime);
        }
        lastClickTime = now;
        clickCount++;
    }

    public synchronized double getAverageInterval() {
        return clickCount <= 1 ? 0.0 : (double) totalInterval / (clickCount - 1);
    }
}