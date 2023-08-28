/**
 * 
  Imagine you're building media player software that supports different types of media, such as videos and audios. 
  At the beginning, you might come up with an interface like this:
 
    interface IMediaPlayer {
        playVideo(filePath: string): void;
        playAudio(filePath: string): void;
    }

    class VideoPlayer implements IMediaPlayer {
        playVideo(filePath: string): void {
            // Play video implementation
        }

        playAudio(filePath: string): void {
            // This doesn't make sense for a dedicated VideoPlayer
            throw new Error("Not supported");
        }
    }

    class AudioPlayer implements IMediaPlayer {
        playVideo(filePath: string): void {
            // This doesn't make sense for a dedicated AudioPlayer
            throw new Error("Not supported");
        }

        playAudio(filePath: string): void {
            // Play audio implementation
        }
    }

 */

interface IVideoPlayer {
    playVideo(filePath: string): void;
}

interface IAudioPlayer {
    playAudio(filePath: string): void;
}

class VideoPlayer implements IVideoPlayer {
    playVideo(filePath: string): void {
        // Play video implementation
    }
}

class AudioPlayer implements IAudioPlayer {
    playAudio(filePath: string): void {
        // Play audio implementation
    }
}

class CombinedMediaPlayer implements IVideoPlayer, IAudioPlayer {
    playVideo(filePath: string): void {
        // Play video implementation for a player that supports both audio and video
    }

    playAudio(filePath: string): void {
        // Play audio implementation for the same
    }
}
