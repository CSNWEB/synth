---
title: Installation
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

<Tabs defaultValue="linux"
values={[
{label: 'Linux', value: 'linux'}, {label: 'macOS', value: 'mac'}, {label: 'Compile from source', value: 'cargo'}, {label: 'Nix', value: 'nix'}, {label: 'GCP Cloud Shell', value: 'gcp_shell'},
]}>

<TabItem value='linux'>

Run the following command to install the `synth` binary:

```bash
curl --proto '=https' --tlsv1.2 -sSL https://sh.getsynth.com | sh
```

:::note
To skip the telemetry prompt (if you are installing Synth in CI for example) you can use the `--ci` flag.
:::

</TabItem>

<TabItem value='nix'>

If you happen to be running the [Nix](https://nixos.org/download.html#nix-quick-install) package manager or if you're on [NixOS](https://nixos.org/), you can use our automated Nix packaging that will set everything up for you (including `Python` dependencies and other runtime requirements).

:::note
We recommend you add [getsynth.cachix.org](https://app.cachix.org/cache/getsynth) to your list of binary caches. This will speed up your installation considerably by downloading [GitHub Actions build artifacts](https://github.com/getsynth/synth/actions/workflows/cachix.yml) instead of compiling everything locally.
:::

To install the latest released version of `synth` with `nix >= 2.4`, run:

```bash
nix-env -i -f https://github.com/getsynth/synth/releases/latest/download/install-nix
```

For versions of `nix < 2.4`, run:

```bash
SYNTH_TMP=$(mktemp); \
	curl -L --output - https://github.com/getsynth/synth/releases/latest/download/install-nix |\
	tar -xO > $SYNTH_TMP; \
	nix-env -i -f $SYNTH_TMP
```

</TabItem>

<TabItem value='cargo'>

To get started, make sure you have a recent version of the [Rust nightly toolchain](https://www.rust-lang.org/tools/install). Then run:

```bash
cargo +nightly install --locked --git https://github.com/getsynth/synth.git synth
```

:::note

If compilation fails, it may be because some required dependencies are not installed. On Ubuntu, you can try:

```
sudo apt-get install libssl-dev libsqlite3-dev
```
:::

</TabItem>
  
<TabItem value='mac'>

Run the following command to install the `synth` binary:

```bash
curl --proto '=https' --tlsv1.2 -sSL https://sh.getsynth.com | sh
```

:::note
To skip the telemetry prompt (if you are installing Synth in CI for example) you can use the `--ci` flag.
:::

</TabItem>


<TabItem value='gcp_shell'>
<div align="center">
<a href="https://ssh.cloud.google.com/cloudshell/editor?cloudshell_git_repo=https://github.com/getsynth/synth.git&cloudshell_print=tools/README-cloud-shell"><img alt="Run in Cloud Shell" src="https://storage.googleapis.com/gweb-cloudblog-publish/images/run_on_google_cloud.max-300x300.png"></img></a>
</div>

If you have a [Google Cloud Platform](https://cloud.google.com/) account, you can quickly give `synth` a try by cloning the GitHub repository in a Cloud Shell instance and running our installation script there. To get started, click on the "Run on Google Cloud" button. Then, as prompted, run the following installer:

```bash
./tools/init-cloud-shell && export PATH=$HOME/.local/bin:$PATH
```

</TabItem>
</Tabs>
