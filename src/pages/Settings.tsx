import {
  Download,
  Settings as SettingsIcon,
  Terminal,
  Cpu,
  HardDrive,
  MemoryStick,
  ExternalLink,
  CheckCircle,
  AlertTriangle,
  Sparkles,
  FileDown,
  Globe,
  Key,
  Bot,
} from 'lucide-react'
import styles from './Settings.module.css'

const llmModels = [
  {
    size: '1.5B',
    label: 'Included',
    example: 'Qwen 2.5 1.5B (built-in)',
    ram: '4 GB',
    vram: 'Not required',
    disk: '~1–1.5 GB',
    cpu: '4 cores',
    speed: 'Fast',
    best: 'Basic assignments, simple Q&A, quick generation',
    tier: 'low',
  },
  {
    size: '3B',
    label: 'Balanced',
    example: 'Llama 3.2 3B, Phi-3 Mini 3.8B',
    ram: '6 GB',
    vram: 'Not required',
    disk: '~2–3 GB',
    cpu: '4+ cores',
    speed: 'Moderate',
    best: 'Good quality assignments, reading materials',
    tier: 'mid',
  },
  {
    size: '7–8B',
    label: 'Quality',
    example: 'Llama 3.1 8B, Mistral 7B, Qwen2.5 7B',
    ram: '8–10 GB',
    vram: '6 GB+ recommended',
    disk: '~4–5 GB',
    cpu: '6+ cores',
    speed: 'Moderate',
    best: 'High-quality content, detailed lessons, creative writing',
    tier: 'high',
  },
  {
    size: '13–14B',
    label: 'Advanced',
    example: 'Llama 2 13B, Qwen2.5 14B',
    ram: '16 GB',
    vram: '8 GB+ recommended',
    disk: '~8–10 GB',
    cpu: '8+ cores',
    speed: 'Slower',
    best: 'Complex curriculum, nuanced content, advanced subjects',
    tier: 'premium',
  },
]

export default function Settings() {
  return (
    <>
      <section className={styles['settings-hero']}>
        <div className="container">
          <h1>
            AI Setup <span>Guide</span>
          </h1>
          <p>
            Keystone Homeschool comes with a built-in AI model ready to go.
            Want more power? Import a GGUF, connect Ollama, or use a cloud
            provider.
          </p>
        </div>
      </section>

      {/* Built-in AI */}
      <section className={styles.section}>
        <div className={styles.content}>
          <div className={styles['section-header']}>
            <div className={styles['section-icon']}>
              <Sparkles size={28} />
            </div>
            <h2>Built-in AI — Ready Out of the Box</h2>
          </div>
          <p>
            Keystone Homeschool ships with the{' '}
            <strong>Qwen 2.5 1.5B GGUF</strong> model included. There&rsquo;s
            nothing extra to install — AI-powered assignment generation, quiz
            creation, and reading materials work the moment you launch
            the program.
          </p>
          <div className={styles['included-badge']}>
            <CheckCircle size={20} />
            <div>
              <h3>Local GGUF Model — Selected by Default</h3>
              <p>
                The built-in Qwen 2.5 1.5B runs entirely on your computer with
                no cost or internet required. It&rsquo;s fast, private, and
                perfect for getting started right away.
              </p>
            </div>
          </div>
          <p>
            The built-in model is great for most families. If you want higher
            quality output, a different local model, or access to cloud AI,
            Keystone supports four AI providers you can switch between at any
            time in <strong>AI Settings</strong>.
          </p>
        </div>
      </section>

      {/* 4 Provider Overview */}
      <section className={`${styles.section} ${styles.alt}`}>
        <div className={styles['content-wide']}>
          <h2 className={styles['options-title']}>AI Provider Options</h2>
          <p className={styles['options-subtitle']}>
            Switch providers anytime in AI Settings. Local options are free and
            private. Cloud options require an API key and internet connection.
          </p>
          <div className={styles['providers-grid']}>
            <a href="#local-gguf" className={`${styles['provider-card']} ${styles['provider-active']}`}>
              <div className={styles['provider-icon']}>
                <HardDrive size={28} />
              </div>
              <h3>Local GGUF Model</h3>
              <span className={styles['provider-tag']}>Default</span>
              <p>
                Built-in Qwen 2.5 1.5B. Import additional GGUF models from
                Hugging Face. No setup needed.
              </p>
            </a>
            <a href="#google-gemini" className={styles['provider-card']}>
              <div className={styles['provider-icon']}>
                <Globe size={28} />
              </div>
              <h3>Google Gemini</h3>
              <span className={styles['provider-tag']}>Cloud</span>
              <p>
                Advanced AI by Google (Gemini Pro). Requires a free API key
                from Google AI Studio.
              </p>
            </a>
            <a href="#openai" className={styles['provider-card']}>
              <div className={styles['provider-icon']}>
                <Bot size={28} />
              </div>
              <h3>OpenAI ChatGPT</h3>
              <span className={styles['provider-tag']}>Cloud</span>
              <p>
                GPT-4 and GPT-3.5 Turbo models. Requires an API key from
                OpenAI (paid usage).
              </p>
            </a>
            <a href="#use-ollama" className={styles['provider-card']}>
              <div className={styles['provider-icon']}>
                <Terminal size={28} />
              </div>
              <h3>Ollama (Local)</h3>
              <span className={styles['provider-tag']}>Local</span>
              <p>
                Run AI models locally via Ollama. Free, private, and supports
                hundreds of models.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* LOCAL GGUF — Import Models */}
      <section id="local-gguf" className={styles.section}>
        <div className={styles.content}>
          <div className={styles['option-label']}>Local GGUF Model</div>
          <div className={styles['section-header']}>
            <div className={styles['section-icon']}>
              <FileDown size={28} />
            </div>
            <h2>Import a Custom GGUF Model</h2>
          </div>
          <p>
            Want to use a more powerful model? Download any GGUF file from
            Hugging Face and import it directly into Keystone — no extra
            software required. GGUF models run entirely on your computer with
            no cost or internet needed.
          </p>

          <div className={styles['info-card']}>
            <h3>What is a GGUF file?</h3>
            <p>
              GGUF is a model format optimized for running LLMs on consumer
              hardware. These files contain a quantized (compressed) version of
              a model that can run efficiently on your CPU or GPU. Popular
              options include Qwen, Llama, Mistral, and other quantized models.
            </p>
          </div>

          <div className={styles['steps-list']}>
            <div className={styles['step-item']}>
              <div className={styles['step-num']}>1</div>
              <div>
                <h3>Browse Hugging Face</h3>
                <p>
                  Search for GGUF models on Hugging Face. Look for models with
                  "GGUF" in the name and Q4_K_M or Q5_K_M quantization for the
                  best balance of quality and performance.
                </p>
                <a
                  href="https://huggingface.co/models?search=gguf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['link-btn']}
                >
                  Browse GGUF Models <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div className={styles['step-item']}>
              <div className={styles['step-num']}>2</div>
              <div>
                <h3>Download the GGUF File</h3>
                <p>
                  Click on the model, go to the "Files" tab, and download the{' '}
                  <code className={styles['inline-code']}>.gguf</code> file.
                  Choose a Q4_K_M quantization for the best balance of size
                  and quality.
                </p>
              </div>
            </div>

            <div className={styles['step-item']}>
              <div className={styles['step-num']}>3</div>
              <div>
                <h3>Import into Keystone</h3>
                <p>
                  In Keystone Homeschool, go to <strong>AI Settings</strong>{' '}
                  &rarr; <strong>Local GGUF Model Management</strong>. Click{' '}
                  <strong>Import GGUF Model</strong>, then browse to your
                  downloaded file or drag and drop it. Only{' '}
                  <code className={styles['inline-code']}>.gguf</code> files
                  are supported.
                </p>
              </div>
            </div>

            <div className={styles['step-item']}>
              <div className={styles['step-num']}>4</div>
              <div>
                <h3>Activate the Model</h3>
                <p>
                  Your imported model will appear under{' '}
                  <strong>Available Models</strong>. Click it to set it as your
                  active model. All assignments will use whichever model is
                  marked as active.
                </p>
              </div>
            </div>
          </div>

          <div className={styles['tip-card']}>
            <AlertTriangle size={18} />
            <div>
              <h4>Quantization Guide</h4>
              <p>
                <strong>Q4_K_M</strong> — Best balance of speed and quality
                (recommended)<br />
                <strong>Q5_K_M</strong> — Slightly better quality, uses more RAM<br />
                <strong>Q8_0</strong> — Near-original quality, requires
                significantly more RAM and disk space
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Gemini */}
      <section id="google-gemini" className={`${styles.section} ${styles.alt}`}>
        <div className={styles.content}>
          <div className={styles['option-label']}>Google Gemini</div>
          <div className={styles['section-header']}>
            <div className={styles['section-icon']}>
              <Globe size={28} />
            </div>
            <h2>Set Up Google Gemini</h2>
          </div>
          <p>
            Google Gemini (Gemini Pro) is a powerful cloud AI option. It
            requires an internet connection and a free API key from Google AI
            Studio.
          </p>

          <div className={styles['steps-list']}>
            <div className={styles['step-item']}>
              <div className={styles['step-num']}>1</div>
              <div>
                <h3>Get a Free API Key</h3>
                <p>
                  Visit Google AI Studio and sign in with your Google account.
                  Create a new API key — it&rsquo;s free for personal use with
                  generous limits.
                </p>
                <a
                  href="https://aistudio.google.com/apikey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['link-btn']}
                >
                  Get Gemini API Key <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div className={styles['step-item']}>
              <div className={styles['step-num']}>2</div>
              <div>
                <h3>Open AI Settings in Keystone</h3>
                <p>
                  Navigate to <strong>AI Settings</strong> and select{' '}
                  <strong>Google Gemini</strong> as your AI provider.
                </p>
              </div>
            </div>

            <div className={styles['step-item']}>
              <div className={styles['step-num']}>3</div>
              <div>
                <h3>Paste Your API Key</h3>
                <p>
                  Enter your API key in the provided field and click{' '}
                  <strong>Save Settings</strong>. Keystone will verify the
                  connection automatically.
                </p>
              </div>
            </div>
          </div>

          <div className={styles['info-card']}>
            <h3>Good to Know</h3>
            <p>
              Google Gemini offers high-quality content generation and handles
              complex subjects well. It requires an internet connection and
              sends assignment prompts to Google&rsquo;s servers. The free tier
              is generous for homeschool use.
            </p>
          </div>
        </div>
      </section>

      {/* OpenAI ChatGPT */}
      <section id="openai" className={styles.section}>
        <div className={styles.content}>
          <div className={styles['option-label']}>OpenAI ChatGPT</div>
          <div className={styles['section-header']}>
            <div className={styles['section-icon']}>
              <Bot size={28} />
            </div>
            <h2>Set Up OpenAI ChatGPT</h2>
          </div>
          <p>
            Use OpenAI&rsquo;s GPT-4 or GPT-3.5 Turbo models for premium
            quality content generation. Requires an API key and a paid OpenAI
            account.
          </p>

          <div className={styles['steps-list']}>
            <div className={styles['step-item']}>
              <div className={styles['step-num']}>1</div>
              <div>
                <h3>Get an API Key</h3>
                <p>
                  Sign up or log in at OpenAI&rsquo;s platform and create an
                  API key. Note that OpenAI charges per usage — you&rsquo;ll
                  need to add billing to your account.
                </p>
                <a
                  href="https://platform.openai.com/api-keys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['link-btn']}
                >
                  Get OpenAI API Key <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div className={styles['step-item']}>
              <div className={styles['step-num']}>2</div>
              <div>
                <h3>Open AI Settings in Keystone</h3>
                <p>
                  Navigate to <strong>AI Settings</strong> and select{' '}
                  <strong>OpenAI ChatGPT</strong> as your AI provider.
                </p>
              </div>
            </div>

            <div className={styles['step-item']}>
              <div className={styles['step-num']}>3</div>
              <div>
                <h3>Paste Your API Key</h3>
                <p>
                  Enter your API key, click <strong>Save Settings</strong>, and
                  Keystone will connect to OpenAI&rsquo;s servers.
                </p>
              </div>
            </div>
          </div>

          <div className={styles['info-card']}>
            <h3>Good to Know</h3>
            <p>
              OpenAI provides some of the highest quality AI-generated content
              available. GPT-4 excels at complex, nuanced assignments. However,
              it requires an internet connection and costs per use. For most
              homeschool families, usage costs are minimal (a few cents per
              assignment).
            </p>
          </div>
        </div>
      </section>

      {/* Ollama */}
      <section id="use-ollama" className={`${styles.section} ${styles.alt}`}>
        <div className={styles.content}>
          <div className={styles['option-label']}>Ollama (Local)</div>
          <div className={styles['section-header']}>
            <div className={styles['section-icon']}>
              <Terminal size={28} />
            </div>
            <h2>Set Up Ollama</h2>
          </div>
          <p>
            Ollama is a free, open-source tool that lets you run and manage
            LLMs locally. It&rsquo;s an alternative to importing GGUF files
            directly — useful if you want to manage multiple models from the
            command line or use Ollama for other projects too. Everything stays
            on your machine, free and private.
          </p>

          <h3 className={styles['sub-heading']}>Install Ollama</h3>
          <div className={styles['steps-list']}>
            <div className={styles['step-item']}>
              <div className={styles['step-num']}>1</div>
              <div>
                <h3>Download Ollama</h3>
                <p>
                  Visit the official Ollama website and download the installer
                  for Windows.
                </p>
                <a
                  href="https://ollama.com/download"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['link-btn']}
                >
                  Download Ollama <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div className={styles['step-item']}>
              <div className={styles['step-num']}>2</div>
              <div>
                <h3>Run the Installer</h3>
                <p>
                  Open the downloaded file and follow the installation prompts.
                  Ollama will install and run in the background automatically.
                </p>
              </div>
            </div>

            <div className={styles['step-item']}>
              <div className={styles['step-num']}>3</div>
              <div>
                <h3>Verify Installation</h3>
                <p>
                  Open a terminal (Command Prompt or PowerShell) and type:
                </p>
                <div className={styles['code-block']}>
                  <code>ollama --version</code>
                </div>
                <p>
                  If you see a version number, Ollama is installed and ready.
                </p>
              </div>
            </div>

            <div className={styles['step-item']}>
              <div className={styles['step-num']}>4</div>
              <div>
                <h3>Pull a Model</h3>
                <p>
                  Download a model through Ollama. For example:
                </p>
                <div className={styles['code-block']}>
                  <code>ollama pull qwen2.5:1.5b</code>
                </div>
                <p>
                  You can browse available models at{' '}
                  <a
                    href="https://ollama.com/library"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ollama.com/library
                  </a>.
                </p>
              </div>
            </div>
          </div>

          <h3 className={styles['sub-heading']}>Connect Ollama to Keystone</h3>
          <div className={styles['steps-list']}>
            <div className={styles['step-item']}>
              <div className={styles['step-num']}>1</div>
              <div>
                <h3>Open AI Settings</h3>
                <p>
                  In Keystone Homeschool, navigate to{' '}
                  <strong>AI Settings</strong>.
                </p>
              </div>
            </div>

            <div className={styles['step-item']}>
              <div className={styles['step-num']}>2</div>
              <div>
                <h3>Select Ollama (Local)</h3>
                <p>
                  Choose <strong>Ollama (Local)</strong> as your AI provider.
                  Keystone will automatically detect your installed Ollama
                  models.
                </p>
              </div>
            </div>

            <div className={styles['step-item']}>
              <div className={styles['step-num']}>3</div>
              <div>
                <h3>Pick Your Model &amp; Save</h3>
                <p>
                  Select which model you want to use from the dropdown and click{' '}
                  <strong>Save Settings</strong>. You can switch models anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LLM Comparison */}
      <section className={styles.section}>
        <div className={styles['content-wide']}>
          <div className={styles['section-header']}>
            <div className={styles['section-icon']}>
              <Cpu size={28} />
            </div>
            <h2>LLM Size Guide</h2>
          </div>
          <p className={styles['section-desc']}>
            For local models (GGUF or Ollama), here&rsquo;s what to expect from
            different model sizes. Larger models produce better content but
            require more resources.
          </p>

          <div className={styles['model-grid']}>
            {llmModels.map((model, i) => (
              <div
                key={i}
                className={`${styles['model-card']} ${styles[model.tier]}`}
              >
                <div className={styles['model-header']}>
                  <span className={styles['model-size']}>{model.size}</span>
                  <span className={styles['model-label']}>{model.label}</span>
                </div>
                <p className={styles['model-example']}>{model.example}</p>
                <div className={styles['model-specs']}>
                  <div className={styles['spec-row']}>
                    <MemoryStick size={14} />
                    <span>RAM:</span>
                    <strong>{model.ram}</strong>
                  </div>
                  <div className={styles['spec-row']}>
                    <Cpu size={14} />
                    <span>CPU:</span>
                    <strong>{model.cpu}</strong>
                  </div>
                  <div className={styles['spec-row']}>
                    <HardDrive size={14} />
                    <span>Disk:</span>
                    <strong>{model.disk}</strong>
                  </div>
                </div>
                <div className={styles['model-speed']}>
                  <span>Speed:</span> {model.speed}
                </div>
                <div className={styles['model-best']}>
                  <CheckCircle size={14} />
                  {model.best}
                </div>
              </div>
            ))}
          </div>

          <div className={styles['recommendation']}>
            <h3>Our Recommendation</h3>
            <p>
              The included <strong>Qwen 2.5 1.5B</strong> is perfect for most
              families. If you have a more powerful machine and want richer
              content, try importing a <strong>3B–7B GGUF model</strong> with
              Q4_K_M quantization for the best balance of speed and quality.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
