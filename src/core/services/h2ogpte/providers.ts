import { LLMProvider } from "./types";

/**
 * Available LLM providers
 */
export const LLM_PROVIDERS: Record<string, LLMProvider> = {
  h2ogpte: {
    id: "h2ogpte",
    name: "h2oGPTe",
    apiKeyEnvVar: "H2OGPTE_API_KEY",
    apiBaseEnvVar: "H2OGPTE_API_BASE",
    defaultApiBase: "https://h2ogpte.genai.h2o.ai",
    modelOptions: ["auto", "claude-3-5-sonnet", "claude-3-opus", "claude-3-haiku", "claude-3-sonnet"]
  },
  openai: {
    id: "openai",
    name: "OpenAI",
    apiKeyEnvVar: "OPENAI_API_KEY",
    apiBaseEnvVar: "OPENAI_API_BASE",
    defaultApiBase: "https://api.openai.com/v1",
    modelOptions: ["gpt-4o", "gpt-4-turbo", "gpt-4", "gpt-3.5-turbo"]
  },
  anthropic: {
    id: "anthropic",
    name: "Anthropic",
    apiKeyEnvVar: "ANTHROPIC_API_KEY",
    apiBaseEnvVar: "ANTHROPIC_API_BASE",
    defaultApiBase: "https://api.anthropic.com",
    modelOptions: ["claude-3-5-sonnet", "claude-3-opus", "claude-3-haiku", "claude-3-sonnet"]
  },
  azure_openai: {
    id: "azure_openai",
    name: "Azure OpenAI",
    apiKeyEnvVar: "AZURE_OPENAI_API_KEY",
    apiBaseEnvVar: "AZURE_OPENAI_API_BASE",
    modelOptions: ["gpt-4o", "gpt-4-turbo", "gpt-4", "gpt-3.5-turbo"]
  },
  google: {
    id: "google",
    name: "Google AI",
    apiKeyEnvVar: "GOOGLE_API_KEY",
    apiBaseEnvVar: "GOOGLE_API_BASE",
    defaultApiBase: "https://generativelanguage.googleapis.com",
    modelOptions: ["gemini-1.5-pro", "gemini-1.5-flash"]
  }
};

/**
 * Get LLM provider by ID
 */
export function getLLMProvider(providerId: string): LLMProvider | undefined {
  return LLM_PROVIDERS[providerId];
}

/**
 * Get all available LLM provider IDs
 */
export function getAvailableLLMProviders(): string[] {
  return Object.keys(LLM_PROVIDERS);
}
