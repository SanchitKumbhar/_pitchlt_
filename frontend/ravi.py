# import speech_recognition as sr
# import webbrowser
# import pyttsx3
# # import musiclibrary  # This should be a separate file with a `music` dictionary inside

# recognizer = sr.Recognizer()
# engine = pyttsx3.init()

# def speak(text):
#     engine.say(text)
#     engine.runAndWait()

# def processcommand(c):
#     c = c.lower()

#     if "open google" in c:
#         webbrowser.open("https://google.com")

#     elif "open facebook" in c:
#         webbrowser.open("https://facebook.com")

#     elif "open youtube" in c:
#         webbrowser.open("https://youtube.com")

#     elif c.startswith("play"):
#         parts = c.split(" ")
#         if len(parts) > 1:
#             song = parts[1]
#             link = musiclibrary.music.get(song)
#             if link:
#                 webbrowser.open(link)
#                 speak(f"Playing {song}")
#             else:
#                 speak("Sorry, I couldn't find that song.")
#         else:
#             speak("Please say the name of the song to play.")

#     elif "close" in c or "exit" in c or "stop" in c:
#         speak("Shutting down. Goodbye!")
#         return True  # Tell main loop to break/exit

#     return False  # Keep listening

# if __name__ == "__main__":
#     speak("Initializing Jarvis....")
#     while True:
#         try:
#             with sr.Microphone() as source:
#                 print("Listening for wake word....")
#                 audio = recognizer.listen(source, timeout=2, phrase_time_limit=2)
#                 word = recognizer.recognize_google(audio)
#                 print(word)

#             if word.lower() == "jarvis":
#                 speak("Yes?")
#                 with sr.Microphone() as source:
#                     print("Jarvis is active. Listening for command....")
#                     audio = recognizer.listen(source)
#                     command = recognizer.recognize_google(audio)
#                     should_close = processcommand(command)
#                     if should_close:
#                         break

#         except Exception as e:
#             print(f"Error: {e}")


import speech_recognition as sr
import webbrowser
import pyttsx3

recognizer = sr.Recognizer()
engine = pyttsx3.init()

def speak(text):
    engine.say(text)
    engine.runAndWait()

def processcommand(c):
   if "open google" in c.lower():
      webbrowser.open("https://google.com")
   elif "open facebook" in c.lower():
      webbrowser.open("https://facebook.com")
   elif "open youtube" in c.lower():
      webbrowser.open("https://youtube.com")
   elif "exit" in c.lower() or "stop" in c.lower():
        speak("Shutting down. Goodbye!")
        return True
   else:
        speak("Sorry, I did not understand that.")
   return False   
  
       
if __name__ == "__main__":
    speak("intializing jarvis......")
    while True:
        # Listen for the wake word "jarvis"
        # obtain audio from the microphone
      
        try:
            with sr.Microphone() as source:
             print("listening....")
             audio = recognizer.listen(source, timeout= 2, phrase_time_limit=2)
            word = recognizer.recognize_google(audio)
            if word.lower() == "jarvis":
               speak("yes")
               #listen for command
               with sr.Microphone() as source:
                    print("jarvis active....")
                    audio = recognizer.listen(source)
                    command = recognizer.recognize_google(audio)
                    should_closed = processcommand(command)
                    if should_closed:
                            break
        except sr.UnknownValueError:
            print("Could not understand audio.")      
        except Exception as e:
                print(f"Error: {e}")