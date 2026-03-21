import { useState } from 'react'
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
  Brain,
  BookOpen,
  Package,
  Layers,
  Zap,
  MessageSquare,
  Library,
  ChevronDown,
  ChevronUp,
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
  const [faqOpen, setFaqOpen] = useState<number | null>(null)

  const toggleFaq = (i: number) => setFaqOpen(faqOpen === i ? null : i)

  return (
    <>
      <section className={styles['settings-hero']}>
        <div className="container">
          <h1>
            AI Setup <span>Guide</span>
          </h1>
          <p>
            Learn how AI works in Keystone, understand the technology behind it,
            and set up the perfect AI provider for your family — all in one place.
          </p>
        </div>
      </section>

      {/* Jump Nav */}
      <nav className={styles['jump-nav']}>
        <div className={styles['jump-nav-inner']}>
          <a href="#understand-ai">Understanding AI</a>
          <a href="#built-in">Built-in AI</a>
          <a href="#providers">Providers</a>
          <a href="#local-gguf">GGUF Models</a>
          <a href="#google-gemini">Gemini</a>
          <a href="#openai">OpenAI</a>
          <a href="#use-ollama">Ollama</a>
          <a href="#size-guide">Size Guide</a>
        </div>
      </nav>

      {/* ========== UNDERSTANDING AI ========== */}
      <section id="understand-ai" className={`${styles.section} ${styles.alt}`}>
        <div className={styles.content}>
          <div className={styles['section-header']}>
            <div className={styles['section-icon']}>
              <Brain size={28} />
            </div>
            <h2>Understanding AI — The Basics</h2>
          </div>
          <p>
            Before diving into setup, let&rsquo;s talk about what&rsquo;s actually
            happening when Keystone generates an assignment for you. You don&rsquo;t
            need to be a tech expert — just a few minutes here and you&rsquo;ll
            understand how this all works.
          </p>

          {/* What is an LLM */}
          <div className={styles['explainer-card']}>
            <div className={styles['explainer-icon']}>
              <MessageSquare size={32} />
            </div>
            <div className={styles['explainer-body']}>
              <h3>What is an LLM?</h3>
              <p>
                LLM stands for <strong>Large Language Model</strong>. Think of it as
                a super well-read assistant that has studied millions of books,
                articles, textbooks, and websites. When you ask it to create a math
                worksheet or a reading passage, it uses everything it learned to
                write something new — just like how you can write a book report
                after reading the book.
              </p>
              <div className={styles['analogy-box']}>
                <BookOpen size={18} />
                <p>
                  <strong>Analogy:</strong> Imagine someone who has read every
                  textbook in the library. They didn&rsquo;t memorize every word,
                  but they learned the patterns — how sentences are built, how
                  math problems are structured, how science concepts are explained.
                  That&rsquo;s essentially what an LLM does. It learned patterns from
                  text, and it uses those patterns to generate brand-new content.
                </p>
              </div>
              <p>
                An LLM doesn&rsquo;t &ldquo;think&rdquo; the way you do. It
                predicts what words should come next based on the patterns it
                learned — kind of like the autocomplete on your phone, but
                dramatically more powerful. Instead of finishing one word, it can
                write entire essays, math problems, quizzes, and lesson plans.
              </p>
            </div>
          </div>

          {/* What is a GGUF */}
          <div className={styles['explainer-card']}>
            <div className={styles['explainer-icon']}>
              <Package size={32} />
            </div>
            <div className={styles['explainer-body']}>
              <h3>What is a GGUF File?</h3>
              <p>
                A full AI model can be absolutely massive — sometimes hundreds of
                gigabytes. That&rsquo;s way too big for a normal computer.{' '}
                <strong>GGUF</strong> is a special file format that shrinks the
                model down so it actually fits on your machine and runs smoothly.
              </p>
              <div className={styles['analogy-box']}>
                <Layers size={18} />
                <p>
                  <strong>Analogy:</strong> Think of a massive, ultra-HD movie file
                  that&rsquo;s 200 GB. You can&rsquo;t really store or stream that
                  easily. So you compress it into a smaller file — maybe 4 GB —
                  and it still looks great, just not pixel-perfect at max zoom.
                  A GGUF file does the same thing for an AI model. It&rsquo;s a
                  compressed version that runs efficiently on everyday hardware.
                </p>
              </div>
              <p>
                The compression process is called <strong>quantization</strong>.
                Different levels of quantization give you different trade-offs:
              </p>
              <div className={styles['quant-visual']}>
                <div className={styles['quant-bar']}>
                  <div className={`${styles['quant-segment']} ${styles['quant-q4']}`}>
                    <strong>Q4</strong>
                    <span>Smallest &middot; Fastest</span>
                  </div>
                  <div className={`${styles['quant-segment']} ${styles['quant-q5']}`}>
                    <strong>Q5</strong>
                    <span>Balanced</span>
                  </div>
                  <div className={`${styles['quant-segment']} ${styles['quant-q8']}`}>
                    <strong>Q8</strong>
                    <span>Largest &middot; Best quality</span>
                  </div>
                </div>
                <div className={styles['quant-labels']}>
                  <span>Less RAM needed &larr;</span>
                  <span>&rarr; Higher quality output</span>
                </div>
              </div>
              <p>
                For most families, <strong>Q4_K_M</strong> is the sweet spot — it
                gives you great results without needing a powerful computer.
              </p>
            </div>
          </div>

          {/* How it works in Keystone */}
          <div className={styles['explainer-card']}>
            <div className={styles['explainer-icon']}>
              <Zap size={32} />
            </div>
            <div className={styles['explainer-body']}>
              <h3>How Does AI Work in Keystone?</h3>
              <p>Here&rsquo;s what happens behind the scenes when you generate an assignment:</p>
              <div className={styles['flow-visual']}>
                <div className={styles['flow-step']}>
                  <div className={styles['flow-num']}>1</div>
                  <p><strong>You describe what you want</strong> — a topic, grade level, number of questions</p>
                </div>
                <div className={styles['flow-arrow']}>&darr;</div>
                <div className={styles['flow-step']}>
                  <div className={styles['flow-num']}>2</div>
                  <p><strong>Keystone sends your request</strong> to the AI model (local on your computer or cloud)</p>
                </div>
                <div className={styles['flow-arrow']}>&darr;</div>
                <div className={styles['flow-step']}>
                  <div className={styles['flow-num']}>3</div>
                  <p><strong>The AI generates content</strong> — questions, answers, reading material</p>
                </div>
                <div className={styles['flow-arrow']}>&darr;</div>
                <div className={styles['flow-step']}>
                  <div className={styles['flow-num']}>4</div>
                  <p><strong>You review and edit everything</strong> — change any question, any answer, any text</p>
                </div>
              </div>
              <p>
                The key thing to remember: <strong>AI is the starting point, not the
                final product</strong>. You always have full control to edit, adjust,
                or completely rewrite anything the AI creates. It&rsquo;s a tool that
                saves you hours of work, but you&rsquo;re always the teacher.
              </p>
            </div>
          </div>

          {/* Local vs Cloud */}
          <h3 className={styles['sub-heading']}>Local vs. Cloud AI — What&rsquo;s the Difference?</h3>
          <div className={styles['compare-grid']}>
            <div className={styles['compare-card']}>
              <div className={styles['compare-header']}>
                <HardDrive size={24} />
                <h4>Local AI</h4>
              </div>
              <ul>
                <li><CheckCircle size={14} /> Runs on your computer — no internet needed</li>
                <li><CheckCircle size={14} /> Completely private — data never leaves your machine</li>
                <li><CheckCircle size={14} /> Free forever — no subscriptions or API costs</li>
                <li><CheckCircle size={14} /> Works offline, anywhere</li>
                <li className={styles['compare-note']}>Speed depends on your hardware</li>
              </ul>
            </div>
            <div className={styles['compare-card']}>
              <div className={styles['compare-header']}>
                <Globe size={24} />
                <h4>Cloud AI</h4>
              </div>
              <ul>
                <li><CheckCircle size={14} /> More powerful models available</li>
                <li><CheckCircle size={14} /> Runs on remote servers — no hardware requirements</li>
                <li><CheckCircle size={14} /> Often faster for complex content</li>
                <li><CheckCircle size={14} /> Easy setup — just paste an API key</li>
                <li className={styles['compare-note']}>Requires internet &amp; may have usage costs</li>
              </ul>
            </div>
          </div>

          {/* Mini FAQ */}
          <h3 className={styles['sub-heading']}>Common Questions</h3>
          <div className={styles['faq-list']}>
            {[
              {
                q: 'Does the AI need internet to work?',
                a: 'Only if you\'re using a cloud provider (Google Gemini or OpenAI). Local models (GGUF and Ollama) run entirely on your computer with zero internet required.',
              },
              {
                q: 'Is my data private?',
                a: 'With local models, absolutely — nothing ever leaves your computer. With cloud providers, your assignment prompts are sent to the provider\'s servers to generate content. No student data or grades are ever sent.',
              },
              {
                q: 'Will the AI make mistakes?',
                a: 'Sometimes. AI is great at creating content quickly, but it\'s not perfect. That\'s why Keystone gives you full editing control over every question, answer, and piece of text. Always review what the AI generates.',
              },
              {
                q: 'Do I need a powerful computer?',
                a: 'The built-in 1.5B model runs on almost any modern computer. If you want to use larger models (7B+), you\'ll need more RAM and a decent CPU. Check the Size Guide section below for specifics.',
              },
            ].map((item, i) => (
              <div key={i} className={styles['faq-item']}>
                <button
                  className={styles['faq-question']}
                  onClick={() => toggleFaq(i)}
                  aria-expanded={faqOpen === i}
                >
                  <span>{item.q}</span>
                  {faqOpen === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {faqOpen === i && (
                  <div className={styles['faq-answer']}>
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built-in AI */}
      <section id="built-in" className={styles.section}>
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
      <section id="providers" className={`${styles.section} ${styles.alt}`}>
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
      <section id="size-guide" className={styles.section}>
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
