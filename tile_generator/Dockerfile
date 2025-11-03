FROM python:3.11

# Install system dependencies including VIPS libraries
RUN apt-get update && apt-get install -y \
    default-jdk \
    git \
    wget \
    build-essential \
    pkg-config \
    libvips-dev \
    libvips42 \
    libglib2.0-dev \
    libexpat1-dev \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
RUN pip install --upgrade pip
COPY requirements.txt /requirements.txt
RUN pip install -r /requirements.txt

# Set working directory
WORKDIR /app

# Copy tile generator source
COPY src/ ./src/
COPY java/ ./java/

# Make gradlew executable and build Java components
RUN chmod +x java/gradlew && cd java && ./gradlew build

# Set environment variables
ENV JAVA_HOME=/usr/lib/jvm/default-java
ENV PATH="$JAVA_HOME/bin:$PATH"

# Increase file handle limits to prevent "too many open files" errors
RUN echo "* soft nofile 65536" >> /etc/security/limits.conf && \
    echo "* hard nofile 65536" >> /etc/security/limits.conf

# Default command
CMD ["python3", "src/tile_generator.py"]
