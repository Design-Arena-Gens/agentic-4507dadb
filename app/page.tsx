const query = `SELECT
  e.name,
  b.bonus
FROM Employee AS e
LEFT JOIN Bonus AS b
  ON e.empId = b.empId
WHERE
  b.empId IS NULL
  OR b.bonus < 1000;`;

export default function Page() {
  return (
    <main style={styles.container}>
      <section style={styles.card}>
        <header style={styles.header}>
          <h1 style={styles.title}>Employee Bonus Report</h1>
          <p style={styles.subtitle}>MySQL solution tailored for the LeetCode challenge.</p>
        </header>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>SQL Query</h2>
          <pre style={styles.pre}>
            <code>{query}</code>
          </pre>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Key Points</h2>
          <ul style={styles.list}>
            <li>Includes employees without a bonus record via a left join.</li>
            <li>Filters bonuses strictly below 1000.</li>
            <li>Returns each employee&apos;s name and bonus amount (or NULL).</li>
          </ul>
        </section>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    width: "100%",
    maxWidth: 960
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    borderRadius: "16px",
    boxShadow: "0 20px 45px rgba(15, 23, 42, 0.12)",
    padding: "2.5rem",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(99, 102, 241, 0.12)"
  },
  header: {
    marginBottom: "2rem"
  },
  title: {
    margin: 0,
    fontSize: "2.5rem",
    fontWeight: 700,
    letterSpacing: "-0.03em",
    color: "#1d1d45"
  },
  subtitle: {
    marginTop: "0.5rem",
    marginBottom: 0,
    fontSize: "1.125rem",
    color: "#475467"
  },
  section: {
    marginBottom: "2rem"
  },
  sectionTitle: {
    margin: 0,
    marginBottom: "1rem",
    fontSize: "1.25rem",
    fontWeight: 600,
    color: "#1d1d45"
  },
  pre: {
    margin: 0,
    padding: "1.5rem",
    backgroundColor: "#0b1220",
    color: "#f8fafc",
    borderRadius: "12px",
    fontSize: "0.95rem",
    lineHeight: 1.65,
    overflowX: "auto",
    border: "1px solid rgba(255, 255, 255, 0.08)"
  },
  list: {
    margin: 0,
    paddingLeft: "1.25rem",
    color: "#374151",
    lineHeight: 1.7
  }
};
