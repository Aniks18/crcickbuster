/* src/components/LiveMatches.css */

.live-matches-container {
    padding: 20px;
    background-color: #f2f2f2;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    max-width: 1200px;
    margin: 0 auto;
    font-family: 'Arial', sans-serif;
}

h2 {
    text-align: center;
    color: #343a40;
    margin-bottom: 30px;
    font-size: 2.5em;
    font-weight: bold;
}

.matches-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
}

.match-card {
    background: linear-gradient(145deg, #ffffff, #e6e6e6);
    border-radius: 15px;
    padding: 20px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1), -5px -5px 15px rgba(255, 255, 255, 0.7);
    transition: transform 0.2s, box-shadow 0.2s;
    position: relative;
    overflow: hidden;
}

.match-card::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transition: transform 0.4s;
    z-index: 0;
    transform: translate(-50%, -50%) scale(0);
}

.match-card:hover::before {
    transform: translate(-50%, -50%) scale(1);
}

.match-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
}

.match-card h3 {
    color: #007bff;
    font-size: 1.5em;
    margin-bottom: 10px;
    z-index: 1; /* Bring h3 above the before pseudo-element */
}

.match-card p {
    margin: 5px 0;
    color: #343a40;
    z-index: 1; /* Bring paragraphs above the before pseudo-element */
}

.no-matches {
    text-align: center;
    font-size: 1.2em;
    color: #dc3545;
}
