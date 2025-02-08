function openEnvelope() {
    const message = document.getElementById('message');
    const envelope = document.querySelector('.envelope');
    const envelopeFlap = document.querySelector('.envelope-flap');

    // Show the message and make the envelope appear "opened"
    message.textContent = "I Love You!";
    message.style.display = 'block';
    envelope.style.transform = 'scale(1.1) rotateX(180deg)';
    envelopeFlap.style.transform = 'rotateX(180deg)';
}

function resetPage() {
    const message = document.getElementById('message');
    const envelope = document.querySelector('.envelope');
    const envelopeFlap = document.querySelector('.envelope-flap');

    // Reset the envelope and message
    message.style.display = 'none';
    envelope.style.transform = 'scale(1) rotateX(0deg)';
    envelopeFlap.style.transform = 'rotateX(0deg)';
}
