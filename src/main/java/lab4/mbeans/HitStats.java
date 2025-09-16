package lab4.mbeans;

import javax.management.Notification;
import javax.management.NotificationBroadcasterSupport;

public class HitStats extends NotificationBroadcasterSupport implements HitStatsMBean {
    private int totalShots = 0;
    private int totalHits = 0;
    private long sequenceNumber = 1;

    private ClickInterval clickInterval; // ссылка на MBean интервала

    public HitStats() {
    }

    public HitStats(ClickInterval clickInterval) {
        this.clickInterval = clickInterval;
    }

    public void setClickInterval(ClickInterval clickInterval) {
        this.clickInterval = clickInterval;
    }

    public synchronized void registerShot(boolean isHit) {
        totalShots++;

        // Регистрируем клик в ClickInterval
        if (clickInterval != null) {
            clickInterval.registerClick();
        }

        if (isHit) {
            totalHits++;
        } else {
            Notification notification = new Notification(
                    "lab4.mbeans.hitstats.miss",
                    this,
                    sequenceNumber++,
                    System.currentTimeMillis(),
                    "User missed"
            );
            sendNotification(notification);
        }
    }

    public int getTotalShots() {
        return totalShots;
    }

    public int getTotalHits() {
        return totalHits;
    }
}